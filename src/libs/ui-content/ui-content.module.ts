import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMaterialModule } from '@angular-cm/ui-material';
import { UiFormlyModule } from '@angular-cm/ui-formly';

import {
  CustomerListComponent,
  CustomerDialogLauncherComponent
} from './customers';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDialogLauncherComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule,
    UiFormlyModule
  ],
  entryComponents: []
})
export class UiContentModule { }
