import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  AuthActionTypes,
  GetEnvInfo,
  GetEnvInfoSuccess,
  GetEnvInfoError
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private http$: HttpClient) {}

  @Effect()
  getEnvironment$ = this.actions$.pipe(
    ofType(AuthActionTypes.GET_ENV_INFO),
    map(action => (action as GetEnvInfo).payload),
    switchMap(payload => {
      const userId = payload.user;
      let params = new HttpParams();
      params = params.append('userId', userId.toString());
      return this.http$.get('http://localhost:8080/auth/env', { params }).pipe(
        map(resp => {
          return new GetEnvInfoSuccess(resp);
        }),
        catchError(err => of(new GetEnvInfoError(err)))
      );
    })
  );
}
