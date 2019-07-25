import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMaterialModule } from '@angular-cm/ui-material';

import { GeneralFiltersComponent } from './general-filters/general-filters.component';
import { CmAlertComponent } from './cm-alert/cm-alert.component';

@NgModule({
  declarations: [
    GeneralFiltersComponent,
    CmAlertComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ],
  exports: [
    GeneralFiltersComponent,
    CmAlertComponent
  ]
})
export class UiCommonModule { }
