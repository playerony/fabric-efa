import { ThemeProvider } from '..';
import { AppProviderProps } from './app-provider.types';

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <ThemeProvider>{children}</ThemeProvider>
);
