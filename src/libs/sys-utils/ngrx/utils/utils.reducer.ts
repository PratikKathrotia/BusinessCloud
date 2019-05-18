import {
  UtilsActionTypes,
  UtilsActions,
  SetToolbarScope
} from './utils.actions';
import { UtilsState, initialUtilsState } from '../../interfaces';

export function Utils(
  state: UtilsState = initialUtilsState,
  action: UtilsActions
): UtilsState {
  switch (action.type) {
    case UtilsActionTypes.SET_TOOLBAR_SCOPE:
      return {
        ...state,
        toolbarLevel: (action as SetToolbarScope).payload
      };

    default:
      return state;
  }
}

