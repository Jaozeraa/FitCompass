import React from 'react';
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import { i18n } from '../../services/translator';
import { useRoute } from '@react-navigation/native';

const EquipmentTracker: React.FC = () => {
  const route = useRoute();
  const { equipment } = route.params as { equipment: models.Equipment };

  return (
    <S.CameraViewer>
      <StatusBar style="light" animated />
      <S.ContentTrackContainer intensity={100}>
        <S.TrackIndicator equipment={equipment} />
      </S.ContentTrackContainer>
    </S.CameraViewer>
  );
};

export default EquipmentTracker;
