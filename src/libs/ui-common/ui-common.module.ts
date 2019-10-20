import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMaterialModule } from '@angular-cm/ui-material';

import { GeneralFiltersComponent } from './general-filters/general-filters.component';
import { CmAlertComponent } from './cm-alert/cm-alert.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CmPopoverComponent } from './cm-popover/cm-popover.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';

@NgModule({
  declarations: [
    GeneralFiltersComponent,
    CmAlertComponent,
    LoadingIndicatorComponent,
    CmPopoverComponent,
    UnauthorizedPageComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ],
  exports: [
    GeneralFiltersComponent,
    CmAlertComponent,
    LoadingIndicatorComponent
  ]
})
export class UiCommonModule { }
