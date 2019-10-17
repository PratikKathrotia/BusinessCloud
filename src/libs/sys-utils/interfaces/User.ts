import { CustomerAddress } from './CustomerAddress';
import { BankPayment } from './BankPayment';
import { CardPayment } from './CardPayment';
import { UserRoles, Permissions } from '../enum';

export interface User {
  account: number;
  role: UserRoles;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  paymentMethod: string;
  payment: BankPayment | CardPayment;
  permissons: Permissions[];
}
