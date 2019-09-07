import {
  CustomerActionTypes,
  CustomerActions,
  GetCustomersSuccess,
  GetCustomersError,
  GetCustomerSuccess,
  GetCustomerError,
  AddNewCustomer,
  AddNewCustomerSuccess,
  AddNewCustomerError,
  UpdateCustomer,
  UpdateCustomerError,
  UpdateCustomerSuccess,
  DeleteCustomerError
} from './customer.actions';
import { CustomerState, SaveState } from '../../interfaces';

export const initialCustomerState: CustomerState = {
  isFetching: false,
  hasError: false,
  error: null,
  customers: [],
  customer: null,
  saveState: {
    add: false,
    update: false,
    delete: false
  }
};

export function CustomerReducer(
  state: CustomerState = initialCustomerState,
  action: CustomerActions
): CustomerState {
  switch (action.type) {
    case CustomerActionTypes.GET_CUSTOMERS:
      return {
        ...state,
        isFetching: true,
        customers: [],
        hasError: false,
        error: null
      };
    case CustomerActionTypes.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customers: (action as GetCustomersSuccess).payload
      };
    case CustomerActionTypes.GET_CUSTOMERS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        customers: [],
        error: (action as GetCustomersError).payload
      };
    case CustomerActionTypes.GET_CUSTOMER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
        customer: null
      };
    case CustomerActionTypes.GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: (action as GetCustomerSuccess).payload
      };
    case CustomerActionTypes.GET_CUSTOMER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: (action as GetCustomerError).payload,
        customer: null
      };
    case CustomerActionTypes.ADD_NEW_CUSTOMER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
        customer: (action as AddNewCustomer).payload,
        saveState: setInitialSaveState('add', state.saveState)
      };
    case CustomerActionTypes.ADD_NEW_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        error: null,
        saveState: setSaveSatate('add', state.saveState),
        customer: (action as AddNewCustomerSuccess).payload
      };
    case CustomerActionTypes.ADD_NEW_CUSTOMER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: (action as AddNewCustomerError).payload
      };
    case CustomerActionTypes.UPDATE_CUSTOMER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
        customer: (action as UpdateCustomer).payload,
        saveState: setInitialSaveState('update', state.saveState)
      };
    case CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: (action as UpdateCustomerSuccess).payload,
        saveState: setSaveSatate('update', state.saveState)
      };
    case CustomerActionTypes.UPDATE_CUSTOMER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: (action as UpdateCustomerError).payload
      };
    case CustomerActionTypes.DELETE_CUSTOMER:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        error: null,
        saveState: setInitialSaveState('delete', state.saveState)
      };
    case CustomerActionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        saveState: setSaveSatate('delete', state.saveState)
      };
    case CustomerActionTypes.DELETE_CUSTOMER_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: (action as DeleteCustomerError).payload
      };
  }

  function setSaveSatate(type: string, currentSave: SaveState): SaveState {
    if (currentSave.hasOwnProperty(type)) {
      currentSave[type] = true;
      return currentSave;
    }
  }

  function setInitialSaveState(type: string, currentSave: SaveState): SaveState {
    if (currentSave.hasOwnProperty(type)) {
      currentSave[type] = false;
      return currentSave;
    }
  }
}

