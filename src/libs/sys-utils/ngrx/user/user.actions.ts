import { Action } from '@ngrx/store';
import { User, CMError } from '../../interfaces';

export enum UserActionTypes {
  ADD_NEW_USER = 'ADD_NEW_USER',
  ADD_NEW_USER_SUCCESS = 'ADD_NEW_USER_SUCCESS',
  ADD_NEW_USER_ERROR = 'ADD_NEW_USER_ERROR'
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

export type UserActions = AddNewUser | AddNewUserSuccess | AddNewUserError;

