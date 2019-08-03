import { BaseAppState } from '../../interfaces/BaseAppState';
import { UserState } from '../../interfaces/UserState';
import { createSelector } from '@ngrx/store';

const userState = (state: BaseAppState) => state.user;

export const UserSelectors = {
  selectUser: createSelector(
    userState,
    (state: UserState) => state.user
  ),
  selectUserAddSuccess: createSelector(
    userState,
    state => state.addUserSuccess
  ),
  selectUserError: createSelector(
    userState,
    state => {
      return {
        hasError: state.hasError,
        error: state.error
      };
    }
  ),
  selectIsUserFetching: createSelector(
    userState,
    state => state.isFetching
  )
};
