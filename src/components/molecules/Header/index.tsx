import React from 'react';

import * as S from './styles';
import { useTheme } from 'styled-components';
import { navigateBack } from '../../../services/navigation';
import { useNavigation } from '@react-navigation/native';
import { i18n } from '../../../services/translator';

const Header: React.FC<models.HeaderProps> = ({
  variant = 'page',
  title,
  color,
  onPress,
}) => {
  const {
    colors: { gray5 },
  } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      {variant === 'page' && (
        <S.PageContainer>
          <S.TitleContainer>
            <S.Title color={color || gray5}>{title}</S.Title>
          </S.TitleContainer>
          <S.BackButton
            onPress={() => {
              navigateBack(navigation);
              if (onPress) return onPress();
            }}
          >
            <S.BackIcon
              name={'chevron-down'}
              size={24}
              color={color || gray5}
            />
          </S.BackButton>
        </S.PageContainer>
      )}
      {variant === 'home' && (
        <S.Container>
          <S.Logo />
          <S.SelectGymContainer
            onPress={() => {
              onPress && onPress();
            }}
          >
            <S.GymText color={color || gray5}>
              {i18n.t('components.header.gym')}
            </S.GymText>
            <S.SelectIcon
              size={16}
              name="chevron-down"
              color={color || gray5}
            />
          </S.SelectGymContainer>
        </S.Container>
      )}
    </>
  );
};

export default Header;
