import { CMError } from './CMError';
import { Customer } from './Customer';

export interface CustomerState {
  isFetching: boolean;
  hasError: boolean;
  error: CMError;
  customers: Customer[];
  customer: Customer;
  saveState: SaveState;
}

export interface SaveState {
  add: boolean;
  update: boolean;
  delete: boolean;
}

