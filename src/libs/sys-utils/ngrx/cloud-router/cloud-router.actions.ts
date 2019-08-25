import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  ROUTER_GO = 'ROUTER_GO'
}

export class Go implements Action {
  readonly type = RouterActionTypes.ROUTER_GO;
  constructor(public payload: string) {}
}

export type RouterActions = Go;
