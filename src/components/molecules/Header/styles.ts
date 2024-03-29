import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import Logo from '../../atoms/Logo';

export const PageContainer = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.View`
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectGymContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GymText = styled.Text<models.HeaderTitleProps>`
  font-size: 14px;
  color: ${props => props.color};
  font-family: ${props => props.theme.fonts.interSemiBold};
  margin-right: 8px;
`;

export const SelectIcon = styled(Feather)``;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled(Feather)``;

export const TitleContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
`;

export const Title = styled.Text<models.HeaderTitleProps>`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.interSemiBold};
  color: ${props => props.color};
  text-align: center;
`;

export { Logo };
