import { CMError } from './CMError';
import { Customer } from './Customer';

export interface CustomersState {
  isFetching: boolean;
  hasError: boolean;
  error: CMError;
  customers: Customer[];
}
