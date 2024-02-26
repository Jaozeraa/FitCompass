import React from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';

const Input: React.FC<models.InputProps> = ({
  control,
  required = false,
  error,
  name,
  containerStyle,
  secureTextEntry = false,
  ...rest
}) => {
  const {
    colors: { primary, gray3 },
  } = useTheme();
  return (
    <S.SearchContainer style={containerStyle}>
      <Feather name="search" size={20} color={primary} />
      <S.InputController
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.SearchInput
            hitSlop={{ top: 24, right: 16, bottom: 24, left: 32 }}
            onBlur={() => {
              onBlur();
            }}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={gray3}
            {...rest}
          />
        )}
      />
    </S.SearchContainer>
  );
};

export default Input;
