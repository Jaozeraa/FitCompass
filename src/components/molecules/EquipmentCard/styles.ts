import styled from 'styled-components/native';
import { css } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';

export const Container = styled.TouchableOpacity<models.EquipmentCardContainerProps>`
  width: 100%;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.gray4};
  flex-direction: row;
  margin-bottom: ${props => (props.isLastItem ? '0' : '16px')};
  align-items: center;

  ${props =>
    props.isLastItem &&
    css`
      border-bottom-width: 0;
      padding-bottom: 0px;
    `}
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const InformationContainer = styled.View`
  flex: 1;
`;

export const TagText = styled.Text`
  font-family: ${props => props.theme.fonts.industryBold};
  font-size: 12px;
  color: ${props => props.theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.industryBold};
  font-size: 20px;
  color: ${props => props.theme.colors.gray1};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StatusText = styled.Text`
  font-family: ${props => props.theme.fonts.interMedium};
  font-size: 14px;
  color: ${props => props.theme.colors.gray2};
  margin-left: 8px;
`;

export const StatusIcon = styled(Feather)``;
