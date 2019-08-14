import { SidebarItem } from './SidebarItem';
import { CMError } from './CMError';

export interface SidebarState {
  isVisible: boolean;
  isFetching: boolean;
  hasError: boolean;
  error: CMError;
  sidebarItems: SidebarItem[];
}
