import { Action } from '@ngrx/store';
import { User, CMError } from '../../interfaces';

export enum UserActionTypes {
  ADD_NEW_USER = 'ADD_NEW_USER',
  ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS',
  ADD_NEW_USER_ERROR = 'ADD_NEW_USER_ERROR',
  GET_USER_INFO = 'GET_USER_INFO',
  GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR',
  RESET_USER_STATE = 'RESET_USER_STATE'
}

export class AddNewUser implements Action {
  readonly type = UserActionTypes.ADD_NEW_USER;
  constructor(public payload: User) {}
}

export class AddNewUserSuccess implements Action {
  readonly type = UserActionTypes.ADD_NEW_USER_SUCCESS;
}

export class AddNewUserError implements Action {
  readonly type = UserActionTypes.ADD_NEW_USER_ERROR;
  constructor(public payload: CMError) {}
}
export class GetUserInfo implements Action {
  readonly type = UserActionTypes.GET_USER_INFO;
  constructor(public payload: string) {}
}
export class GetUserInfoSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserInfoError implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_ERROR;
  constructor(public payload: CMError) {}
}

export class ResetUserState implements Action {
  readonly type = UserActionTypes.RESET_USER_STATE;
}

export type UserActions =
  AddNewUser
| AddNewUserSuccess
| AddNewUserError
| GetUserInfo
| GetUserInfoSuccess
| GetUserInfoError
| ResetUserState;

