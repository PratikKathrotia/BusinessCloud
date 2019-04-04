export interface SidebarItem {
  id: string;
  label: string;
  domElId: string;
  icon: string;
  tooltip?: string;
  routeUrl?: string;
  isActive?: boolean;
}
