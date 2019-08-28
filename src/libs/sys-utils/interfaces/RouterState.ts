import { NavigationExtras } from '@angular/router';

export interface RouterState {
  path: any[];
  data?: any;
  query?: any;
  extras?: NavigationExtras;
  params?: any;
}

export const initialRouterState: RouterState = {
  data: {},
  path: [],
  query: null,
  extras: null,
  params: null
};
