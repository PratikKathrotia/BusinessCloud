import { CustomerAddress } from './CustomerAddress';
import { BankPayment } from './BankPayment';
import { CardPayment } from './CardPayment';
import { Roles } from '../enum';

export interface User {
  account: number;
  role: Roles;
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  paymentMethod: string;
  payment: BankPayment | CardPayment;
}
