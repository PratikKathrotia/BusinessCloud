import {
  LoadingActionTypes,
  LoadingActions
} from './loading.actions';
import { LoadingState, initialLoadingState } from '../../interfaces';

export function Loading(
  state: LoadingState = initialLoadingState,
  action: LoadingActions
): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.SHOW_LOADING:
      return {
        ...state,
        show: true
      };

    case LoadingActionTypes.HIDE_LOADING:
      return {
        ...state,
        show: false
      };

    default:
      return state;
  }
}
