import { SidebarItem } from './SidebarItem';
import { CMError } from './CMError';

export interface SidebarState {
  isFetching: boolean;
  hasError: boolean;
  error: CMError;
  sidebarItems: SidebarItem[];
}
