import { SidebarState } from './SidebarState';
import { CustomerState } from './CustomerState';
import { PageHeaderState } from './PageHeaderState';
import { AuthState } from './AuthState';
import { UtilsState } from './UtilsState';
import { UserState } from './UserState';
import { LoadingState } from './loadingState';
import { RouterState } from './RouterState';

export interface BaseAppState {
  auth: AuthState;
  loading: LoadingState;
  sidebar: SidebarState;
  customer: CustomerState;
  pageHeader: PageHeaderState;
  router: RouterState;
  user: UserState;
  utils: UtilsState;
}
