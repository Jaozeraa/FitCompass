import React from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { navigateTo } from '../../../services/navigation';
import { useNavigation } from '@react-navigation/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { i18n } from '../../../services/translator';

const EquipmentCard: React.FC<models.EquipmentCardProps> = ({
  isLastItem = false,
  equipment,
  containerStyle,
  disabled,
  loading,
}) => {
  const navigation = useNavigation();
  const {
    colors: { error, warning, success },
  } = useTheme();

  const statusIcons = {
    unavailable: {
      name: 'x-circle',
      color: error,
    },
    available: {
      name: 'check-circle',
      color: success,
    },
    maintenance: {
      name: 'alert-triangle',
      color: warning,
    },
  };

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <S.Container
      disabled={disabled || loading}
      style={containerStyle}
      isLastItem={!loading && isLastItem}
      onPress={() => {
        navigateTo(navigation, 'EquipmentTracker', {
          equipment,
        });
      }}
    >
      <ShimmerPlaceholder
        shimmerStyle={{
          width: 80,
          height: 80,
          borderRadius: 4,
          marginRight: 16,
        }}
        visible={!loading}
      >
        <S.Image
          source={{
            uri: equipment?.imageUrl,
          }}
        />
      </ShimmerPlaceholder>
      <S.InformationContainer>
        <ShimmerPlaceholder
          shimmerStyle={{
            width: 50,
            marginBottom: 4,
          }}
          visible={!loading}
        >
          <S.TagText>{equipment?.tag}</S.TagText>
        </ShimmerPlaceholder>
        <ShimmerPlaceholder visible={!loading}>
          <S.Title>{equipment?.name}</S.Title>
        </ShimmerPlaceholder>
        <ShimmerPlaceholder
          shimmerStyle={{
            width: 100,
            marginTop: 8,
          }}
          visible={!loading}
        >
          <S.StatusContainer>
            <S.StatusIcon
              name={statusIcons[equipment?.status]?.name as 'check'}
              color={statusIcons[equipment?.status]?.color as string}
              size={16}
            />
            <S.StatusText>
              {i18n.t(`components.equipmentCard.status.${equipment?.status}`)}
            </S.StatusText>
          </S.StatusContainer>
        </ShimmerPlaceholder>
      </S.InformationContainer>
    </S.Container>
  );
};

export default EquipmentCard;
