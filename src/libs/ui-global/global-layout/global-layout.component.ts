import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  SetToolbarScope,
  ToolbarScope,
  sidebarSelectors,
  pageHeaderSelectors
} from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit {
  sidebarVisible: boolean;
  pageHeaderVisible: boolean;
  subject: Subject<any>;

  constructor(
    private store$: Store<any>
  ) { }

  get isSidebarVisible(): boolean {
    return this.sidebarVisible;
  }

  get isPageHeaderVisible(): boolean {
    return this.pageHeaderVisible;
  }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.listen();
  }

  subscribeSidebarVisibility(): void {
    this.store$.pipe(
      select(sidebarSelectors.selectSidebarVisibility),
      takeUntil(this.subject)
    ).subscribe(isVisible => this.sidebarVisible = isVisible);
  }

  subscribePageHeaderVisibility(): void {
    this.store$.pipe(
      select(pageHeaderSelectors.selectPageHeaderVisibility),
      takeUntil(this.subject)
    ).subscribe(isVisible => this.pageHeaderVisible = isVisible);
  }

  listen() {
    this.subscribeSidebarVisibility();
    this.subscribePageHeaderVisibility();
  }

}
