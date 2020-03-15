import { UserRoles, Permissions } from '../enum';

export interface Environment {
  user_id: number;
  account_id: number;
  email: string;
  account_email: string;
  account_name: string;
  account_type: string;
  account_currency: string;
  last_customer_id: string;
  roles: UserRoles[];
  permissions: Permissions[];
}
