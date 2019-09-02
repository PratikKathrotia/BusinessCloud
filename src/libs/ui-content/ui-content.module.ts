import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMaterialModule } from '@angular-cm/ui-material';
import { UiFormlyModule } from '@angular-cm/ui-formly';

import {
  CustomerListComponent,
  CustomerDialogLauncherComponent
} from './customers';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDialogLauncherComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule,
    UiFormlyModule
  ],
  entryComponents: [
    CustomerDetailsComponent
  ]
})
export class UiContentModule { }
