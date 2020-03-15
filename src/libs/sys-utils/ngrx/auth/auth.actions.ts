import { Action } from '@ngrx/store';
import { AuthState, CMError } from '../../interfaces';

export enum AuthActionTypes {
  RESET_AUTH_STATE = 'RESET_AUTH_STATE',
  GET_ENV_INFO = 'GET_ENV_INFO',
  GET_ENV_INFO_SUCCESS = 'GET_ENV_INFO_SUCCESS',
  GET_ENV_INFO_ERROR = 'GET_ENV_INFO_ERROR',
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',
  LOGOUT_USER = 'LOGOUT_USER'
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class LoginUserSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_USER_SUCCESS;
  constructor(
    public payload: {
      accountId: number;
      userId: number;
    }
  ) {}
}

export class LoginUserError implements Action {
  readonly type = AuthActionTypes.LOGIN_USER_ERROR;
  constructor(public payload: CMError) {}
}

export class LogoutUser implements Action {
  readonly type = AuthActionTypes.LOGOUT_USER;
}

export class ResetAuthState implements Action {
  readonly type = AuthActionTypes.RESET_AUTH_STATE;
}

export class GetEnvInfo implements Action {
  readonly type = AuthActionTypes.GET_ENV_INFO;
  constructor(
    public payload: {
      user: number;
    }
  ) {}
}

export class GetEnvInfoSuccess implements Action {
  readonly type = AuthActionTypes.GET_ENV_INFO_SUCCESS;
  constructor(public payload: any) {}
}

export class GetEnvInfoError implements Action {
  readonly type = AuthActionTypes.GET_ENV_INFO_ERROR;
  constructor(public payload: CMError) {}
}

export type AuthActions =
  | LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LogoutUser
  | GetEnvInfo
  | GetEnvInfoSuccess
  | GetEnvInfoError
  | ResetAuthState;
