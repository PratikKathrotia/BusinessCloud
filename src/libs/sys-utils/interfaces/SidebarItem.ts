export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  tooltip?: string;
  routeUrl?: string;
  isActive?: boolean;
}
