import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '@angular-cm/ui-material';

import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    GlobalLayoutComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ]
})
export class UiGlobalModule { }
