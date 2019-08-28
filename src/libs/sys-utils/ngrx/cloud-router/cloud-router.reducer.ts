import { createSelector } from '@ngrx/store';
import {
  RouterActionTypes,
  RouterActions
} from './cloud-router.actions';
import {
  BaseAppState,
  RouterState,
  initialRouterState
} from '../../interfaces';

const selectRouteData = (state: BaseAppState) => state.router;
export const selectQueryParams = createSelector(selectRouteData, state => state.query);
export const selectRouteParams = createSelector(selectRouteData, state => state.params);

export function CloudRouter(
  state: RouterState = initialRouterState,
  action: RouterActions
): RouterState {
  switch (action.type) {
    case RouterActionTypes.ROUTER_CHANGE:
    case RouterActionTypes.ROUTER_GO:
      return {
        ...state,
        data: null,
        path: action.payload.path,
        query: action.payload.query,
        params: action.payload.params,
        extras: action.payload.extras
      };

    case RouterActionTypes.ROUTER_FORWARD:
    case RouterActionTypes.ROUTER_BACK:
      return {
        ...state
      };

    default:
      return state;
  }
}


