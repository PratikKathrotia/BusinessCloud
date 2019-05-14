import {
  PageHeaderActionTypes,
  PageHeaderActions,
  HeaderConfigInit,
  HeaderActionClicked
} from './header.actions';
import { PageHeaderState } from '../../interfaces';

const initialState: PageHeaderState = {
  isFetching: true,
  config: null,
  actionId: null
};

export function PageHeader(
  state: PageHeaderState = initialState,
  action: PageHeaderActions
) {
  switch (action.type) {
    case PageHeaderActionTypes.HEADER_CONFIG_INIT:
      return {
        ...state,
        isFetching: false,
        config: (action as HeaderConfigInit).payload
      };

    case PageHeaderActionTypes.HEADER_ACTION_CLICKED:
      return {
        ...state,
        isFetching: false,
        actionId: (action as HeaderActionClicked).payload
      };

    default:
      return state;
  }
}
