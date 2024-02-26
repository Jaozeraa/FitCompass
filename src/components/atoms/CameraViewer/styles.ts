import styled from 'styled-components/native';
import { Camera } from 'expo-camera';

export const Container = styled(Camera)`
  flex: 1;
  background-color: ${props => props.theme.colors.gray1};
`;
