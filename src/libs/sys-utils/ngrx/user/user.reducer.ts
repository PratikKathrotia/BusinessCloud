import {
  UserActionTypes,
  UserActions,
  AddNewUserError,
  GetUserInfo,
  GetUserInfoSuccess,
  GetUserInfoError
} from './user.actions';
import { UserState } from '../../interfaces/UserState';

const initialState: UserState = {
  isFetching: false,
  user: null,
  hasError: false,
  error: null,
  addUserSuccess: false,
  currentUserId: null
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

    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        currentUserId: (action as GetUserInfo).payload,
        isFetching: true,
        hasError: false
      };

    case UserActionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        user: (action as GetUserInfoSuccess).payload,
        isFetching: false,
        hasError: false,
        error: null
      };

    case UserActionTypes.GET_USER_INFO_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: (action as GetUserInfoError).payload
      };

    case UserActionTypes.RESET_USER_STATE:
      return {
        ...initialState
      };

    default:
      return state;
  }
}

