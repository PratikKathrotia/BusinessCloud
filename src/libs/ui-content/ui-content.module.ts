import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditDialogComponent } from './customer-edit-dialog/customer-edit-dialog.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerEditDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiContentModule { }
