import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { EnvironmentService } from '../../services/environment.service';

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
    private envService: EnvironmentService,
    private http$: HttpClient
  ) {}

  @Effect()
  getCustomers$ = this.actions$.pipe(
    ofType(CustomerActionTypes.GET_CUSTOMERS),
    switchMap(action => {
      const userId = (action as GetCustomers).payload;
      let params = new HttpParams();
      params = params.append('userId', userId.toString());
      params = params.append('entity', 'customers');
      params = params.append('limit', '25');
      params = params.append('offset', '0');
      return this.http$
        .get(`${this.envService.getDataUrl()}/customers`, { params })
        .pipe(
          map((res: any) => {
            return new GetCustomersSuccess(res.items as Customer[]);
          }),
          catchError(err => of(new GetCustomersError(err)))
        );
    })
  );

  @Effect()
  getCustomer$ = this.actions$.pipe(
    ofType(CustomerActionTypes.GET_CUSTOMER),
    switchMap(action => {
      const customerId = (action as GetCustomer).payload;
      return this.http$
        .get(`${this.envService.getDataUrl()}/customers/${customerId}`)
        .pipe(
          map((res: any) => {
            const [customer] = res.items;
            return new GetCustomerSuccess(customer as Customer);
          }),
          catchError(err => of(new GetCustomerError(err)))
        );
    })
  );
}
