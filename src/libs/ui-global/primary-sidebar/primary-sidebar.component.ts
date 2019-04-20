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
        id: '1',
        label: 'Home',
        domElId: 'home1',
        icon: 'home',
        tooltip: 'Home',
        routeUrl: 'global/home',
        isActive: true
      },
      {
        id: '2',
        label: 'Customers',
        domElId: 'cust2',
        icon: 'people',
        tooltip: 'Customers',
        routeUrl: 'global/customers-list',
        isActive: false
      },
      {
        id: '3',
        label: 'Settings',
        domElId: 'sett3',
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
      sidebarItem.isActive = item.domElId === sidebarItem.domElId;
    });
  }

  handleSidebarExpand() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }


}
