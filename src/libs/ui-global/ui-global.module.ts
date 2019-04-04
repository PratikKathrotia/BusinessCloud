import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '@angular-cm/ui-material';

import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PrimarySidebarComponent } from './primary-sidebar/primary-sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    GlobalLayoutComponent,
    ToolbarComponent,
    PrimarySidebarComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    UiMaterialModule
  ]
})
export class UiGlobalModule { }
