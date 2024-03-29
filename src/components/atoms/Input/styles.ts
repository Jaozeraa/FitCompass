import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';

export const Container = styled.View`
  width: 100%;
`;

export const InputController = styled(Controller)`
  width: 100%;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.gray4};
  border-radius: 4px;
  padding-horizontal: 16px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${props => props.theme.colors.gray1};
  font-family: ${props => props.theme.fonts.interMedium};
  padding-left: 16px;
`;

export { Controller };
