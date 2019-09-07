import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CustomerService } from '../../services/customer.service';

import {
  CustomerActionTypes,
  CustomerActions,
  GetCustomers,
  GetCustomersSuccess,
  GetCustomersError
} from './customer.actions';

@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) { }

  @Effect()
  getCustomers$ = this.actions$.pipe(
    ofType(CustomerActionTypes.GET_CUSTOMERS),
    switchMap(action => {
      const accountId = (action as GetCustomers).payload;
      return this.customerService.getCustomers(accountId).pipe(
        map(res => {
          return new GetCustomersSuccess(res);
        }),
        catchError(error => of(new GetCustomersError(error)))
      );
    })
  );

}

