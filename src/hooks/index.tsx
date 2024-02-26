import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/theme/defaultTheme';
import { DefaultTheme } from 'styled-components/dist/types';

const RootProvider: React.FC<models.DefaultComponentProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
