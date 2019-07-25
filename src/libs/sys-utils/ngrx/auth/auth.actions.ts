import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SET_AUTH_STATUS = 'SET_AUTH_STATUS',
  RESET_AUTH_STATE = 'RESET_AUTH_STATE'
}

export class SetAuthStatus implements Action {
  readonly type = AuthActionTypes.SET_AUTH_STATUS;
  constructor(public payload: any) {}
}

export class ResetAuthState implements Action {
  readonly type = AuthActionTypes.RESET_AUTH_STATE;
}

export type AuthActions =
  SetAuthStatus
| ResetAuthState;
