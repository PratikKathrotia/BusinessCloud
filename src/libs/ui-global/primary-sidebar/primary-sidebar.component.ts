import { Component, OnInit } from '@angular/core';
import {
  SidebarItem,
  UtilityService
} from '@angular-cm/sys-utils';

@Component({
  selector: 'primary-sidebar',
  templateUrl: './primary-sidebar.component.html',
  styleUrls: ['./primary-sidebar.component.scss']
})
export class PrimarySidebarComponent implements OnInit {
  items: SidebarItem[];
  isSidebarExpanded: boolean;

  constructor(
    private utilService: UtilityService
  ) { }

  ngOnInit() {
    this.items = [
      {
        id: 'customers',
        label: 'Customers',
        icon: 'people',
        tooltip: 'Customers',
        routeUrl: 'global/customers',
        isActive: true
      },
      {
        id: 'employees',
        label: 'Employees',
        icon: 'assignment_ind',
        tooltip: 'Employees',
        routeUrl: 'global/employees',
        isActive: false
      },
      {
        id: 'suppliers',
        label: 'Suppliers',
        icon: 'how_to_reg',
        tooltip: 'Suppliers',
        routeUrl: 'global/suppliers',
        isActive: false
      },
      {
        id: 'inventory',
        label: 'Inventory',
        icon: 'widgets',
        tooltip: 'Inventory',
        routeUrl: 'global/inventory',
        isActive: false
      },
      {
        id: 'maintenance',
        label: 'Maintenance',
        icon: 'build',
        tooltip: 'Maintenance',
        routeUrl: 'maintenance',
        isActive: false
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'settings',
        tooltip: 'Settings',
        routeUrl: 'global/settings',
        isActive: false
      }
    ];
    this.isSidebarExpanded = false;
  }

  isSelected(item: SidebarItem) {
    return item.isActive;
  }

  handleSidebarItemClick(item: SidebarItem) {
    this.items.forEach(sidebarItem => {
      sidebarItem.isActive = item.id === sidebarItem.id;
    });
  }

  handleSidebarExpand() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }


}
