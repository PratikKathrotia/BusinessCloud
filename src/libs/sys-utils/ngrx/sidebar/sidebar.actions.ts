import { Action } from '@ngrx/store';
import { SidebarItem, CMError } from '../../interfaces';

export enum SidebarActionTypes {
  SIDEBAR_ITEMS_LOAD = 'SIDEBAR_ITEMS_LOAD',
  SIDEBAR_ITEMS_LOAD_SUCCESS = 'SIDEBAR_ITEMS_LOAD_SUCCESS',
  SIDEBAR_ITEMS_LOAD_ERROR = 'SIDEBAR_ITEMS_LOAD_ERROR',
  TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY'
}

export class SidebarItemsLoad implements Action {
  readonly type = SidebarActionTypes.SIDEBAR_ITEMS_LOAD;
  constructor(public payload: string) {}
}

export class SidebarItemsLoadSuccess implements Action {
  readonly type = SidebarActionTypes.SIDEBAR_ITEMS_LOAD_SUCCESS;
  constructor(public payload: SidebarItem[]) {}
}

export class SidebarItemsLoadError implements Action {
  readonly type = SidebarActionTypes.SIDEBAR_ITEMS_LOAD_ERROR;
  constructor(public payload: CMError) {}
}

export class ToggleSidebaVisibility implements Action {
  readonly type = SidebarActionTypes.TOGGLE_SIDEBAR_VISIBILITY;
  constructor(public payload: boolean) {}
}

export type SidebarActions =
  SidebarItemsLoad
| SidebarItemsLoadSuccess
| SidebarItemsLoadError
| ToggleSidebaVisibility;


