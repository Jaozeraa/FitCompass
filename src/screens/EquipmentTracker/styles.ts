import styled, { css } from 'styled-components/native';
import Header from '../../components/molecules/Header';
import { Platform } from 'react-native';
import CameraViewer from '../../components/atoms/CameraViewer';
import { BlurView } from 'expo-blur';
import TrackIndicator from '../../components/atoms/TrackIndicator';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray1};
`;

export const ContentTrackContainer = styled(BlurView)`
  flex: 1;
  background-color: #000000cc;
`;

export { Header, CameraViewer, TrackIndicator };
