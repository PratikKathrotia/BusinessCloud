import { SidebarState } from './SidebarState';
import { CustomersState } from './CustomersState';
import { PageHeaderState } from './PageHeaderState';
import { AuthState } from './AuthState';

export interface BaseAppState {
  auth: AuthState;
  sidebar: SidebarState;
  customers: CustomersState;
  pageHeader: PageHeaderState;
}
