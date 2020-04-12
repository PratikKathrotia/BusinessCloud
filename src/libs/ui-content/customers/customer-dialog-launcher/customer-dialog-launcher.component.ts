import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import {
  FullScreenDialogConfig,
  Go,
  ResetCustomerState
} from '@angular-cm/sys-utils';

import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'customer-dialog-launcher',
  template: ''
})
export class CustomerDialogLauncherComponent {
  subject: Subject<any> = new Subject<any>();

  constructor(private dialog: MatDialog, private store$: Store<any>) {
    this.openDetailsDialog();
  }

  openDetailsDialog() {
    this.dialog
      .open(CustomerDetailsComponent, FullScreenDialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.store$.dispatch(new ResetCustomerState());
        this.store$.dispatch(
          new Go({
            path: ['global/customers']
          })
        );
      });
  }
}
