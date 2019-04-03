import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalLayoutComponent } from '@angular-cm/ui-global';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/global',
    pathMatch: 'full'
  },
  {
    path: 'global',
    component: GlobalLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
