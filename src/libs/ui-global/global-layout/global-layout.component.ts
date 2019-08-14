import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SetToolbarScope, ToolbarScope, sidebarSelectors } from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit {
  sidebarVisible: boolean;
  subject: Subject<any>;

  constructor(
    private store$: Store<any>
  ) { }

  get isSidebarVisible(): boolean {
    return this.sidebarVisible;
  }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.store$.dispatch(new SetToolbarScope(ToolbarScope.GLOBAL_LEVEL));
    this.listen();
  }

  listen() {
    this.store$.pipe(
      select(sidebarSelectors.selectSidebarVisibility),
      takeUntil(this.subject)
    ).subscribe(isVisible => this.sidebarVisible = isVisible);
  }

}
