import { CustomerAddress } from './CustomerAddress';
import { CustomerOrder } from './CustomerOrder';

export interface Customer {
  customer_id: string;
  customer_name: string;
  customer_org?: string;
  balance: number;
  customer_email: string;
  customer_phone: string;
  customer_address: CustomerAddress;
  created: string;
  customer_orders: CustomerOrder[];
}

export const EmptyCustomer: Customer = {
  customer_id: 'something',
  balance: null,
  customer_name: null,
  customer_org: null,
  customer_email: null,
  customer_phone: null,
  customer_address: null,
  created: null,
  customer_orders: []
};
