import { Action } from '@ngrx/store';
import { ToolbarScope } from '@angular-cm/sys-utils';

export enum UtilsActionTypes {
  SET_TOOLBAR_SCOPE = 'SET_TOOLBAR_SCOPE',
}

export class SetToolbarScope implements Action {
  readonly type = UtilsActionTypes.SET_TOOLBAR_SCOPE;
  constructor(public payload: ToolbarScope) {}
}

export type UtilsActions = SetToolbarScope;
