import { CustomerName } from './CustomerName';
import { CustomerAddress } from './CustomerAddress';
import { CustomerOrder } from './CustomerOrder';

export interface Customer {
  id: string;
  balance: number;
  gender: string;
  picture: string;
  eyeColor: string;
  name: CustomerName;
  company: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  about: string;
  created: string;
  longitude: string;
  latitude: string;
  orders: CustomerOrder[];
}
