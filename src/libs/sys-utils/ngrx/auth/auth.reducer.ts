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
      if (status.isLoggedIn) {
        sessionStorage.setItem('userToken', status.currentUid);
      }
      return {
        ...state,
        isLoggedIn: status.isLoggedIn,
        isEmailVerified: status.isEmailVerified,
        currentUid: status.currentUid
      };

    case AuthActionTypes.RESET_AUTH_STATE:
      sessionStorage.removeItem('userToken');
      return initialAuthState;

    default:
      return {
        ...state,
        isLoggedIn: sessionStorage.getItem('userToken') ? true : false
      };
  }
}
