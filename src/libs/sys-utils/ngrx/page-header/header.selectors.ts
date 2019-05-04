import { BaseAppState, PageHeaderState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const pageHeaderState = (state: BaseAppState) => state.pageHeader;

export const pageHeaderSelectors = {
  selectHeaderConfig: createSelector(
    pageHeaderState,
    (configState: PageHeaderState) => configState.config
  ),

  selectHeaderActionIndex: createSelector(
    pageHeaderState,
    (callbackState: PageHeaderState) => callbackState.actionIndex
  )
};
