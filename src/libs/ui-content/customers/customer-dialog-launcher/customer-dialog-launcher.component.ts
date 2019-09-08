import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { FullScreenDialogConfig, Go, selectQueryParams, GetCustomer } from '@angular-cm/sys-utils';

import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'customer-dialog-launcher',
  template: ''
})
export class CustomerDialogLauncherComponent {
  subject: Subject<any> = new Subject<any>();
  constructor(
    private dialog: MatDialog,
    private store$: Store<any>
  ) {
    this.subscribeQueryParams();
    this.openDetailsDialog();
  }

  subscribeQueryParams() {
    this.store$.pipe(
      select(selectQueryParams),
      takeUntil(this.subject)
    ).subscribe(params => {
      if (params && params.customer_id) {
        this.store$.dispatch(new GetCustomer(params.customer_id));
      }
    });
  }

  openDetailsDialog() {
    this.dialog.open(
      CustomerDetailsComponent,
      FullScreenDialogConfig
    ).afterClosed().subscribe(() => {
      this.store$.dispatch(new Go({
        path: ['global/customers']
      }));
    });
  }

}
