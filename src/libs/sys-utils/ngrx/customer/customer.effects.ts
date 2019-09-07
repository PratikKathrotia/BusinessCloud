import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  CustomerActionTypes,
  CustomerActions
} from './customer.actions';


@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions
  ) { }

}

