import { AppProvider } from '../context';
import { DashboardPage } from '../pages';
import { PrimaryBackground } from '../layout';

export const App = (): JSX.Element => (
  <AppProvider>
    <PrimaryBackground>
      <DashboardPage />
    </PrimaryBackground>
  </AppProvider>
);
