import { AppProvider } from '../context';
import { DashboardPage } from '../pages';

export const App = (): JSX.Element => (
  <AppProvider>
    <DashboardPage />
  </AppProvider>
);
