import {
  PageHeaderActionTypes,
  PageHeaderActions,
  HeaderConfigInit
} from './header.actions';
import { PageHeaderState } from '../../interfaces';

const initialState: PageHeaderState = {
  isFetching: true,
  config: null
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
  }
}
