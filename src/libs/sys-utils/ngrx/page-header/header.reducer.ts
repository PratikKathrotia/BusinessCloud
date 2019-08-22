import {
  PageHeaderActionTypes,
  PageHeaderActions,
  HeaderConfigInit,
  HeaderActionClicked
} from './header.actions';
import { PageHeaderState } from '../../interfaces';

const initialState: PageHeaderState = {
  isVisible: false,
  isFetching: true,
  config: null,
  actionId: null
};

export function PageHeader(
  state: PageHeaderState = initialState,
  action: PageHeaderActions
): PageHeaderState {
  switch (action.type) {
    case PageHeaderActionTypes.HEADER_CONFIG_INIT:
      return {
        ...state,
        isFetching: false,
        isVisible: true,
        config: (action as HeaderConfigInit).payload
      };

    case PageHeaderActionTypes.HEADER_ACTION_CLICKED:
      return {
        ...state,
        isFetching: false,
        actionId: (action as HeaderActionClicked).payload
      };

    case PageHeaderActionTypes.RESET_PAGE_HEADER:
        return {
          ...initialState
        };

    default:
      return state;
  }
}
