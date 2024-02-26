import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import Header from '../../molecules/Header';
import { Animated, Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  position: relative;

  ${Platform.OS === 'android' &&
  css`
    padding-top: 56px;
  `}
`;

export const SuccessWallpaper = styled(Animated.View)`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.success};
`;

export const InformationContainer = styled.View`
  margin-top: 48px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.gray5};
  font-family: ${props => props.theme.fonts.industryBold};
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.gray4};
  font-family: ${props => props.theme.fonts.interMedium};
  margin-bottom: 24px;
  text-align: center;
`;

export const ArrowContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(Feather)``;

export const DistanceContainer = styled.View`
  margin-top: auto;
  align-items: center;
  padding-bottom: 56px;
  padding-top: 24px;
`;

export const DistanceText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray4};
  font-family: ${props => props.theme.fonts.interMedium};
  text-align: center;
`;

export { Header };
