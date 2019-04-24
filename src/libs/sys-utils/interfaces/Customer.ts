import { CustomerName } from './CustomerName';
import { CustomerAddress } from './CustomerAddress';
import { CustomerOrder } from './CustomerOrder';

export interface Customer {
  id: string;
  balance: number;
  gender: string;
  dateOfBirth: string;
  picture: string;
  name: CustomerName;
  company: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  created: string;
  longitude: string;
  latitude: string;
  orders: CustomerOrder[];
}
