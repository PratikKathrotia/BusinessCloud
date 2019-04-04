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
  selectedItem: SidebarItem;

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
  }

  isSelected(item: SidebarItem) {
    return false;
  }

  handleSidebarItemClick(item: SidebarItem) {
    this.selectedItem = this.utilService.copy(item);
  }


}
