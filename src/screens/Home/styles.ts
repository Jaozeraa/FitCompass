import styled from 'styled-components/native';
import BrandWallpaperVector from '../../components/atoms/BrandWallpaperVector';
import Input from '../../components/atoms/Input';
import Logo from '../../components/atoms/Logo';
import { FlatList } from 'react-native';
import EquipmentCard from '../../components/molecules/EquipmentCard';
import Header from '../../components/molecules/Header';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  position: relative;
`;

export const WallpaperContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding-top: 56px;
  justify-content: flex-end;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 24px;
  width: 100%;
  height: 100px;
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  margin-bottom: auto;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.gray5};
  font-family: ${props => props.theme.fonts.industryBold};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray4};
  font-family: ${props => props.theme.fonts.interMedium};
  margin-bottom: 24px;
`;

export const Content = styled.View`
  height: 80%;
  position: relative;
`;

export const SearchContainer = styled.View`
  position: absolute;
  width: 100%;
  padding-horizontal: 24px;
  top: 0;
  z-index: 2;
`;

export const BottomSheetContainer = styled.View`
  flex: 1;
  margin-top: 28px;
  background-color: ${props => props.theme.colors.gray5};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const EquipmentList = styled(FlatList)``;

export const RefreshContainer = styled.View`
  margin-top: 56px;
`;

export { BrandWallpaperVector, Input, Logo, EquipmentCard, Header };
