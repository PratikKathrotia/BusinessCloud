import { BaseAppState, PageHeaderState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const pageHeaderState = (state: BaseAppState) => state.pageHeader;

export const pageHeaderSelectors = {
  selectHeaderConfig: createSelector(
    pageHeaderState,
    (state: PageHeaderState) => state.config
  ),

  selectHeaderActionIndex: createSelector(
    pageHeaderState,
    (state: PageHeaderState) => state.actionId
  ),

  selectPageHeaderVisibility: createSelector(
    pageHeaderState,
    (state: PageHeaderState) => state.isVisible
  )
};
