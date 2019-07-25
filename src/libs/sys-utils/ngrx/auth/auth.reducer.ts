import {
  AuthActionTypes,
  AuthActions,
  SetAuthStatus
} from './auth.actions';
import { AuthState, initialAuthState } from '../../interfaces';

export function Auth(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_STATUS:
      const status = (action as SetAuthStatus).payload;
      return {
        ...state,
        isLoggedIn: status.login,
        isEmailVerified: status.isEmailVerified,
        currentUid: status.uid
      };

    case AuthActionTypes.RESET_AUTH_STATE:
      return initialAuthState;

    default:
      return state;
  }
}
