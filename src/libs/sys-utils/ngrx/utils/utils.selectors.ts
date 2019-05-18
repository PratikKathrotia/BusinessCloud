import { BaseAppState, UtilsState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

export const utilsState = (state: BaseAppState) => state.utils;

export const utilsSelectors = {
  selectToolbarScope: createSelector(
    utilsState,
    (state: UtilsState) => state.toolbarLevel
  )
};
