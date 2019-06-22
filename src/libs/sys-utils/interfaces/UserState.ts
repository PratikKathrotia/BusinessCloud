import { CMError } from './CMError';
import { User } from './User';

export interface UserState {
  isFetching: boolean;
  hasError: boolean;
  error: CMError;
  user: User;
  addUserSuccess: boolean;
}
