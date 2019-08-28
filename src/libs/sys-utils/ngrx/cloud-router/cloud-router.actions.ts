import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  ROUTER_GO = 'ROUTER_GO',
  ROUTER_CHANGE = 'ROUTER_CHANGE',
  ROUTER_BACK = 'ROUTER_BACK',
  ROUTER_FORWARD = 'ROUTER_FORWARD'
}

export class Go implements Action {
  readonly type = RouterActionTypes.ROUTER_GO;
  constructor(
    public payload: {
      path: any[];
      query?: any;
      params?: any;
      extras?: NavigationExtras;
    }
  ) { }
}

export class Change implements Action {
  readonly type = RouterActionTypes.ROUTER_CHANGE;
  constructor(
    public payload: {
      path: any[];
      query?: any;
      params?: any;
      extras?: NavigationExtras;
    }
  ) { }
}

export class RouterBack implements Action {
  readonly type = RouterActionTypes.ROUTER_BACK;
}

export class RouterForward implements Action {
  readonly type = RouterActionTypes.ROUTER_FORWARD;
}

export type RouterActions = Go | Change | RouterBack | RouterForward;
