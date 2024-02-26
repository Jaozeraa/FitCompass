import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Magnetometer } from 'expo-sensors';
import * as Location from 'expo-location';
import * as S from './styles';
import { calculateAngle } from '../../../utils/calculateAngle';
import { useTheme } from 'styled-components';
import { getDistance } from 'geolib';
import { formatDistance } from '../../../utils/formatDistance';
import { i18n } from '../../../services/translator';
import { Animated } from 'react-native';

const TrackIndicator: React.FC<models.TrackIndicatorProps> = ({
  equipment,
}) => {
  const {
    colors: { gray4 },
  } = useTheme();
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
    angle: 0,
  });
  const [userLocation, setUserLocation] = useState<models.Location | null>(
    null,
  );
  const subscriptionRef = useRef<any>(null);
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const opacityStyle = { opacity: opacityAnimation };

  const handleSuccess = () => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const distance = useMemo(() => {
    if (!userLocation) return 0;
    const result = getDistance(
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      },
      {
        latitude: equipment.latitude,
        longitude: equipment.longitude,
      },
    );
    if (result <= 1) {
      handleSuccess();
    }
    return result;
  }, [userLocation]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 0,
          distanceInterval: 0,
        },
        location => {
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        },
      );
    })();
  }, []);

  const subscribe = () => {
    subscriptionRef.current = Magnetometer.addListener(result => {
      if (!userLocation) return;

      // Calculate angle between magnetometer data and desired north
      const angle = calculateAngle(
        result.x,
        result.y,
        equipment.latitude - userLocation.latitude, // Adjust for user's latitude
        equipment.longitude - userLocation.longitude, // Adjust for user's longitude
      );

      setData({
        x: result.x,
        y: result.y,
        z: result.z,
        angle: 90 + angle * (180 / Math.PI), // Convert angle to degrees
      });
    });
    Magnetometer.setUpdateInterval(1);
  };

  const unsubscribe = () => {
    if (subscriptionRef.current) {
      subscriptionRef.current.remove();
      subscriptionRef.current = null;
    }
  };

  const toggle = () => {
    if (subscriptionRef.current) {
      unsubscribe();
    } else {
      subscribe();
    }
  };

  useEffect(() => {
    toggle();
    return () => {
      unsubscribe();
    };
  }, [userLocation]);

  if (!userLocation) return null;

  return (
    <S.Container>
      <S.SuccessWallpaper style={opacityStyle} />
      <S.Header title={i18n.t('screens.equipmentTracker.headerTitle')} />
      <S.InformationContainer>
        <S.Title>{equipment.name}</S.Title>
        <S.Description>{formatDistance(distance)}</S.Description>
      </S.InformationContainer>
      <S.ArrowContainer>
        <S.Arrow
          name="arrow-up"
          size={240}
          color={gray4}
          style={{
            transform: [{ rotate: `${data.angle}deg` }],
          }}
        />
      </S.ArrowContainer>
      <S.DistanceContainer>
        <S.DistanceText>
          {i18n.t('screens.equipmentTracker.description')}
        </S.DistanceText>
      </S.DistanceContainer>
    </S.Container>
  );
};

export default TrackIndicator;
