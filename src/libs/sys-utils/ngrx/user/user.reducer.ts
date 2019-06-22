import {
  UserActionTypes,
  UserActions,
  AddNewUserError
} from './user.actions';
import { UserState } from '../../interfaces/UserState';

const initialState: UserState = {
  isFetching: false,
  user: null,
  hasError: false,
  error: null,
  addUserSuccess: false
};

export function UserReducer(
  state: UserState = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ADD_NEW_USER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        user: null
      };

    case UserActionTypes.ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        addUserSuccess: true
      };

    case UserActionTypes.ADD_NEW_USER_ERROR:
      return {
        ...state,
        hasError: true,
        isFetching: false,
        addUserSuccess: false,
        error: (action as AddNewUserError).payload
      };

    default:
      return state;
  }
}

