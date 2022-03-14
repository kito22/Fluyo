import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      primaryButtonBackground: string;
      secondaryButtonBackground: string;
      primaryBackground: string;
      success: string;
      error: string;
      fontPrimary: string;
      fontSecondary: string;
    };
  }
}
