import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SidebarActionTypes, SidebarItemsLoadSuccess } from './sidebar.actions';

@Injectable()
export class SidebarEffects {
  constructor(
    private actions$: Actions
  ) {}

  items = [
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

  @Effect()
  loadSidebarItems$ = this.actions$.pipe(
    ofType(SidebarActionTypes.SIDEBAR_ITEMS_LOAD),
    switchMap(() => {
      return of(new SidebarItemsLoadSuccess(this.items));
    })
  );
}
