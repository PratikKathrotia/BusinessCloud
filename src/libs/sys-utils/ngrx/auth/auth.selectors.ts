import { AuthState, BaseAppState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const authState = (state: BaseAppState) => state.auth;

export const AuthSelectors = {
  selectAuthStatus: createSelector(authState, (state: AuthState) => {
    return {
      login: state.isLoggedIn,
      account: state.accountId,
      user: state.userId
    };
  }),

  selectEnvStatus: createSelector(authState, state => state.env)
};
