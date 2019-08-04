import { LoadingState, BaseAppState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const loadingState = (state: BaseAppState) => state.loading;

export const LoadingSelectors = {
  selectLoadingState: createSelector(
    loadingState,
    (state: LoadingState) => state.show
  )
};

