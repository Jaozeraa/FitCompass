import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      success: string;
      error: string;
      warning: string;
    };
    fonts: {
      interMedium: string;
      interSemiBold: string;
      interBold: string;
      industryBold: string;
    };
  }
}
