import { AuthState, BaseAppState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const authState = (state: BaseAppState) => state.auth;

export const authSelectors = {
  selectEmailVerification: createSelector(
    authState,
    (state: AuthState) => state.isEmailVerified
  ),

  selectUserUid: createSelector(
    authState,
    (state: AuthState) => state.currentUid
  ),

  selectLoginStatus: createSelector(
    authState,
    (state: AuthState) => state.isLoggedIn
  )
};
