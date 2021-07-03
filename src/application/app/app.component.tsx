import { AppProvider } from '../context';
import { PrimaryBackground } from '../layout';
import { Routing } from '../routing/routing.component';

export const App = (): JSX.Element => (
  <AppProvider>
    <PrimaryBackground>
      <Routing />
    </PrimaryBackground>
  </AppProvider>
);
