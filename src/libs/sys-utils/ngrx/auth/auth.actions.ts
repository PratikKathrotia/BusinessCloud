import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SET_AUTH_STATUS = 'SET_AUTH_STATUS',
  RESET_AUTH_STATE = 'RESET_AUTH_STATE',
  SET_EMAIL_VARIFICATION_FLAG = 'SET_EMAIL_VARIFICATION_FLAG',
  SET_CURRENT_USER_UID = 'SET_CURRENT_USER_UID'
}

export class SetAuthStatus implements Action {
  readonly type = AuthActionTypes.SET_AUTH_STATUS;
  constructor(public payload: boolean) {}
}

export class ResetAuthState implements Action {
  readonly type = AuthActionTypes.RESET_AUTH_STATE;
}

export class SetEmailVerificationFlag implements Action {
  readonly type = AuthActionTypes.SET_EMAIL_VARIFICATION_FLAG;
  constructor(public payload: boolean) {}
}

export class SetCurrentUserUid implements Action {
  readonly type = AuthActionTypes.SET_CURRENT_USER_UID;
  constructor(public payload: string) {}
}

export type AuthActions =
  SetAuthStatus
| ResetAuthState
| SetEmailVerificationFlag
| SetCurrentUserUid;
