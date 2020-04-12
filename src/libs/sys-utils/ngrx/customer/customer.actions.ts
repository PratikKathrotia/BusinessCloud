import { Action } from '@ngrx/store';
import { Customer, CMError } from '../../interfaces';

export enum CustomerActionTypes {
  GET_CUSTOMERS = 'GET_CUSTOMERS',
  GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS',
  GET_CUSTOMERS_ERROR = 'GET_CUSTOMERS_ERROR',
  GET_CUSTOMER = 'GET_CUSTOMER',
  GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS',
  GET_CUSTOMER_ERROR = 'GET_CUSTOMER_ERROR',
  ADD_NEW_CUSTOMER = 'ADD_NEW_CUSTOMER',
  ADD_NEW_CUSTOMER_SUCCESS = 'ADD_NEW_CUSTOMER_SUCCESS',
  ADD_NEW_CUSTOMER_ERROR = 'ADD_NEW_CUSTOMER_ERROR',
  UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
  UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS',
  UPDATE_CUSTOMER_ERROR = 'UPDATE_CUSTOMER_ERROR',
  DELETE_CUSTOMER = 'DELETE_CUSTOMER',
  DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS',
  DELETE_CUSTOMER_ERROR = 'DELETE_CUSTOMER_ERROR',
  RESET_CUSTOMER_STATE = 'RESET_CUSTOMER_STATE'
}

export class GetCustomers implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMERS;
  constructor(public payload: number) {}
}

export class GetCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMERS_SUCCESS;
  constructor(public payload: Customer[]) {}
}

export class GetCustomersError implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMERS_ERROR;
  constructor(public payload: CMError) {}
}

export class GetCustomer implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER;
  constructor(public payload: string) {}
}

export class GetCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER_SUCCESS;
  constructor(public payload: Customer) {}
}

export class GetCustomerError implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER_ERROR;
  constructor(public payload: CMError) {}
}

export class AddNewCustomer implements Action {
  readonly type = CustomerActionTypes.ADD_NEW_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class AddNewCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.ADD_NEW_CUSTOMER_SUCCESS;
  constructor(public payload: Customer) {}
}

export class AddNewCustomerError implements Action {
  readonly type = CustomerActionTypes.ADD_NEW_CUSTOMER_ERROR;
  constructor(public payload: CMError) {}
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER;
  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;
  constructor(public payload: Customer) {}
}

export class UpdateCustomerError implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_ERROR;
  constructor(public payload: CMError) {}
}

export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER;
  constructor(public payload: string) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;
}

export class DeleteCustomerError implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_ERROR;
  constructor(public payload: CMError) {}
}

export class ResetCustomerState implements Action {
  readonly type = CustomerActionTypes.RESET_CUSTOMER_STATE;
}

export type CustomerActions =
  | GetCustomers
  | GetCustomersSuccess
  | GetCustomersError
  | GetCustomer
  | GetCustomerSuccess
  | GetCustomerError
  | AddNewCustomer
  | AddNewCustomerSuccess
  | AddNewCustomerError
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerError
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerError
  | ResetCustomerState;
