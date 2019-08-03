import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  UserActionTypes,
  AddNewUser,
  AddNewUserSuccess,
  AddNewUserError,
  GetUserInfo,
  GetUserInfoSuccess,
  GetUserInfoError
} from './user.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  addNewUser$ = this.actions$.pipe(
    ofType(UserActionTypes.ADD_NEW_USER),
    switchMap(action => {
      const user = (action as AddNewUser).payload;
      return this.userService.addUser(user)
        .then(success => {
          return new AddNewUserSuccess();
        }).catch(error => {
          return new AddNewUserError(error);
      });
    })
  );

  @Effect()
  getUserInfo$ = this.actions$.pipe(
    ofType(UserActionTypes.GET_USER_INFO),
    switchMap(action => {
      const userId = (action as GetUserInfo).payload;
      return this.userService.getUser(userId).pipe(
        map(data => {
          const user = data.data();
          return new GetUserInfoSuccess(user as User);
        }),
        catchError(error => of(new GetUserInfoError(error)))
      );
    })
  );
}
