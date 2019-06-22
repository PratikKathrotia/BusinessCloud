import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  UserActionTypes,
  AddNewUser,
  AddNewUserSuccess,
  AddNewUserError
} from './user.actions';
import { UserService } from '../../services/user.service';

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
}
