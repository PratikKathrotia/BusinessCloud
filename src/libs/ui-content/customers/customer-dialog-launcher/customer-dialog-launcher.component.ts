import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { FullScreenDialogConfig, Go } from '@angular-cm/sys-utils';

import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'customer-dialog-launcher',
  template: ''
})
export class CustomerDialogLauncherComponent {

  constructor(
    private dialog: MatDialog,
    private store$: Store<any>
  ) {
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
