import { SidebarState } from './SidebarState';
import { CustomersState } from './CustomersState';

export interface BaseAppState {
  sidebar: SidebarState;
  customers: CustomersState;
}
