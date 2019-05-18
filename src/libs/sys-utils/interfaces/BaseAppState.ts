import { SidebarState } from './SidebarState';
import { CustomersState } from './CustomersState';
import { PageHeaderState } from './PageHeaderState';
import { AuthState } from './AuthState';
import { UtilsState } from './UtilsState';

export interface BaseAppState {
  auth: AuthState;
  sidebar: SidebarState;
  customers: CustomersState;
  pageHeader: PageHeaderState;
  utils: UtilsState;
}
