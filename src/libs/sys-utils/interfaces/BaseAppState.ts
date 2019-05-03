import { SidebarState } from './SidebarState';
import { CustomersState } from './CustomersState';
import { PageHeaderState } from './PageHeaderState';

export interface BaseAppState {
  sidebar: SidebarState;
  customers: CustomersState;
  pageHeader: PageHeaderState;
}
