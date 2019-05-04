import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalLayoutComponent } from '@angular-cm/ui-global';
import { CustomerListComponent } from '@angular-cm/ui-content';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/global',
    pathMatch: 'full'
  },
  {
    path: 'global',
    component: GlobalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        component: CustomerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
