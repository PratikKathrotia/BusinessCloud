import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  SHOW_LOADING = 'SHOW_LOADING',
  HIDE_LOADING = 'HIDE_LOADING'
}

export class ShowLoading implements Action {
  readonly type = LoadingActionTypes.SHOW_LOADING;
}

export class HideLoading implements Action {
  readonly type = LoadingActionTypes.HIDE_LOADING;
}

export type LoadingActions = ShowLoading | HideLoading;
