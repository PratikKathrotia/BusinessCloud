import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CustomerService } from '../../services/customer.service';

import {
  CustomerActionTypes,
  GetCustomers,
  GetCustomersSuccess,
  GetCustomersError,
  GetCustomer,
  GetCustomerSuccess,
  GetCustomerError
} from './customer.actions';
import { Customer } from '../../interfaces';

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

  @Effect()
  getCustomer$ = this.actions$.pipe(
    ofType(CustomerActionTypes.GET_CUSTOMER),
    switchMap(action => {
      const customerId = (action as GetCustomer).payload;
      return this.customerService.getCustomer(customerId).pipe(
        map(data => {
          const customer = data.data() as Customer;
          return new GetCustomerSuccess(customer);
        }),
        catchError(error => of(new GetCustomerError(error)))
      );
    })
  );

}

