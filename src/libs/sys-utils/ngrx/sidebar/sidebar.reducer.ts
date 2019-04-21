import { Action } from '@ngrx/store';
import {
  SidebarActions,
  SidebarActionTypes,
  SidebarItemsLoadSuccess,
  SidebarItemsLoadError
} from './sidebar.actions';
import { SidebarState, SidebarItem } from '../../interfaces';

const initialState: SidebarState = {
  sidebarItems: [],
  isFetching: false,
  hasError: false,
  error: null
};

export function Sidebar(
  state: SidebarState = initialState,
  action: SidebarActions
): SidebarState {

  switch (action.type) {
    case SidebarActionTypes.SIDEBAR_ITEMS_LOAD:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null
      };

    case SidebarActionTypes.SIDEBAR_ITEMS_LOAD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sidebarItems: (action as SidebarItemsLoadSuccess).payload,
        hasError: false,
        error: null
      };

    case SidebarActionTypes.SIDEBAR_ITEMS_LOAD_ERROR:
      return {
        ...state,
        isFetching: false,
        sidebarItems: [],
        hasError: true,
        error: (action as SidebarItemsLoadError).payload
      };

    default:
      return state;
  }
}
