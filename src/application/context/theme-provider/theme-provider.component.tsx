import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { defaultTheme, ResetStyles, GlobalStyles } from '@infrastructure';
import { ThemeProviderProps } from './theme-provider.types';

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => (
  <StyledThemeProvider theme={defaultTheme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
