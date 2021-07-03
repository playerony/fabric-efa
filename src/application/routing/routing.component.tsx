import { Children } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routingConfig, Routes } from './routing.config';

export const Routing = (): JSX.Element => (
  <Switch>
    {Children.toArray(
      Object.keys(routingConfig).map((path) => {
        const currentRoute = routingConfig[path as Routes];

        return <Route {...currentRoute} path={path} exact={currentRoute.exact ?? true} />;
      }),
    )}
  </Switch>
);
