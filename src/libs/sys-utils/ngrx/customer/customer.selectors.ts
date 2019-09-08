import { BaseAppState } from '../../interfaces/BaseAppState';
import { CustomerState } from '../../interfaces';
import { createSelector } from '@ngrx/store';

const customerState = (state: BaseAppState) => state.customer;

export const CustomerSelectors = {
  selectCustomers: createSelector(
    customerState,
    (state: CustomerState) => state.customers
  ),
  selectCustomer: createSelector(
    customerState,
    (state: CustomerState) => state.customer
  )
};

