import {
  AuthActionTypes,
  AuthActions,
  SetAuthStatus,
  SetEmailVerificationFlag,
  SetCurrentUserUid
} from './auth.actions';
import { AuthState, initialAuthState } from '../../interfaces';

export function Auth(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        isLoggedIn: (action as SetAuthStatus).payload
      };

    case AuthActionTypes.SET_EMAIL_VARIFICATION_FLAG:
      return {
        ...state,
        isEmailVerified: (action as SetEmailVerificationFlag).payload
      };

    case AuthActionTypes.SET_CURRENT_USER_UID:
      return {
        ...state,
        isLoggedIn: true,
        currentUid: (action as SetCurrentUserUid).payload
      };

    case AuthActionTypes.RESET_AUTH_STATE:
      return initialAuthState;

    default:
      return state;
  }
}
