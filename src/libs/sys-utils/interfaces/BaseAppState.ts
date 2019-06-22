import { SidebarState } from './SidebarState';
import { CustomersState } from './CustomersState';
import { PageHeaderState } from './PageHeaderState';
import { AuthState } from './AuthState';
import { UtilsState } from './UtilsState';
import { UserState } from './UserState';

export interface BaseAppState {
  auth: AuthState;
  sidebar: SidebarState;
  customers: CustomersState;
  pageHeader: PageHeaderState;
  user: UserState;
  utils: UtilsState;
}
