import {
  AuthActionTypes,
  AuthActions,
  LoginUserSuccess,
  GetEnvInfoSuccess
} from './auth.actions';
import { AuthState, initialAuthState } from '../../interfaces';

export function Auth(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER:
      return {
        ...state
      };
    case AuthActionTypes.LOGIN_USER_SUCCESS:
      const payload = (action as LoginUserSuccess).payload;
      sessionStorage.setItem('access_token', payload.userId.toString());
      return {
        ...state,
        isLoggedIn: true,
        accountId: payload.accountId,
        userId: payload.userId
      };
    case AuthActionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoggedIn: false
      };
    case AuthActionTypes.LOGOUT_USER:
      return {
        ...initialAuthState
      };

    case AuthActionTypes.GET_ENV_INFO:
      return {
        ...state,
        env: null
      };

    case AuthActionTypes.GET_ENV_INFO_SUCCESS:
      const env = (action as GetEnvInfoSuccess).payload;
      return {
        ...state,
        env: env
      };

    case AuthActionTypes.GET_ENV_INFO_ERROR:
      return {
        ...state,
        env: null
      };

    default:
      return {
        ...state,
        isLoggedIn: sessionStorage.getItem('access_token') ? true : false
      };
  }
}
