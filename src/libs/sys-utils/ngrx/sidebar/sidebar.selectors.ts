import { BaseAppState, SidebarState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const sidebarState = (state: BaseAppState): SidebarState => state.sidebar;

export const sidebarSelectors = {
  selectSidebarItems: createSelector(
    sidebarState,
    (state: SidebarState) => state.sidebarItems
  ),

  selectSidebarErrorState: createSelector(
    sidebarState,
    (state: SidebarState) => {
      return {
        hasError: state.hasError,
        error: (state.error) ? state.error : null
      };
    }
  )
};
