import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SidebarRailService,
  SidebarItem,
  UtilService
} from '@angular-eBooks/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ UtilService ]
})
export class SidebarComponent implements OnInit {
  selectedItem = 'item1';
  isRailShowing: boolean;
  sidebarItems: SidebarItem[];
  subject: Subject<any>;

  constructor(
    private utilService: UtilService,
    private sidebarService: SidebarRailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isRailShowing = true;
    this.sidebarService.getSiderailStatus(false);
    this.subject = new Subject<any>();
    this.utilService.getSidebarItems().pipe(
      takeUntil(this.subject)
    ).subscribe(items => {
      this.sidebarItems = items as SidebarItem[];
    });
  }

  isSelected(item: SidebarItem) {
    return this.selectedItem === item.id;
  }

  handleSidebarItemClick(item: SidebarItem) {
    if (this.selectedItem === item.id) {
      if (item.showRail) {
        this.sidebarService.getSiderailStatus(!this.isRailShowing);
        this.isRailShowing = !this.isRailShowing;
      }
    } else {
      this.selectedItem = item.id;
      this.sidebarService.getSiderailStatus(item.showRail);
      this.isRailShowing = item.showRail;
    }

    if (item.routeUrl) {
      this.router.navigate([item.routeUrl]);
    }
  }

}
