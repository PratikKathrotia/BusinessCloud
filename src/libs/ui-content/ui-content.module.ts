import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { UiMaterialModule } from '@angular-cm/ui-material';
import { UiFormlyModule } from '@angular-cm/ui-formly';

import { CustomerListComponent, CustomerDialogLauncherComponent } from './customers';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDialogLauncherComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    UiMaterialModule,
    UiFormlyModule
  ],
  entryComponents: [CustomerDetailsComponent]
})
export class UiContentModule {}
