import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '..';

import { AppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <BrowserRouter>
    <ThemeProvider>{children}</ThemeProvider>
  </BrowserRouter>
);
