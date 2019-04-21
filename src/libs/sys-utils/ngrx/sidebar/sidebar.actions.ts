import { Action } from '@ngrx/store';
import { SidebarItem, CMError } from '../../interfaces';

export enum SidebarActionTypes {
  SIDEBAR_ITEMS_LOAD = 'SIDEBAR_ITEMS_LOAD',
  SIDEBAR_ITEMS_LOAD_SUCCESS = 'SIDEBAR_ITEMS_LOAD_SUCCESS',
  SIDEBAR_ITEMS_LOAD_ERROR = 'SIDEBAR_ITEMS_LOAD_ERROR'
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

export type SidebarActions = SidebarItemsLoad | SidebarItemsLoadSuccess | SidebarItemsLoadError;


