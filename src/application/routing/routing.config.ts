import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as pages from '../pages';

export interface RoutingConfig {
  exact?: boolean;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export enum Routes {
  DASHBOARD = '/',
  NOT_FOUND = '/404',
  ANY = '*',
}

export const routingConfig: Record<Routes, RoutingConfig> = {
  [Routes.DASHBOARD]: {
    component: pages.DashboardPage,
  },
  [Routes.NOT_FOUND]: {
    component: pages.NotFoundPage,
  },
  [Routes.ANY]: {
    component: pages.NotFoundPage,
  },
};
