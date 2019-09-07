import { CustomerAddress } from './CustomerAddress';
import { CustomerOrder } from './CustomerOrder';

export interface Customer {
  id: string;
  balance: number;
  gender: string;
  dateOfBirth: string;
  picture: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: CustomerAddress;
  created: string;
  longitude: string;
  latitude: string;
  orders: CustomerOrder[];
}

export const EmptyCustomer: Customer = {
  id: 'something',
  balance: null,
  gender: null,
  dateOfBirth: null,
  picture: null,
  name: null,
  company: null,
  email: null,
  phone: null,
  address: null,
  created: null,
  longitude: null,
  latitude: null,
  orders: []
};
