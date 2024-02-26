import React, { useEffect } from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { Camera, CameraType } from 'expo-camera';

const CameraViewer: React.FC<models.DefaultComponentProps> = ({ children }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission || !permission.granted) {
    return null;
  }

  return <S.Container type={CameraType.back}>{children}</S.Container>;
};

export default CameraViewer;
