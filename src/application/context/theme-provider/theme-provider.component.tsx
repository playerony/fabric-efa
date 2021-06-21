import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProviderProps } from './theme-provider.types';
import { defaultTheme, ResetStyles, GlobalStyles } from '@infrastructure';

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={defaultTheme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
