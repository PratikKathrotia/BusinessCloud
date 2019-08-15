import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CustomerListComponent,
  CustomerDetailsComponent
} from '@angular-cm/ui-content';
import {
  SignInComponent,
  SignUpComponent
} from '@angular-cm/ui-auth';
import { AuthGuard } from '@angular-cm/sys-utils';

const routes: Routes = [
  {
    path: 'global/customers',
    component: CustomerListComponent,
    // canActivate: [ AuthGuard ]  add uid to session storage and enable guard
  },
  {
    path: 'global/customer-details',
    component: CustomerDetailsComponent,
    // canActivate: [ AuthGuard ]
  },
  {
    path: 'auth/login',
    component: SignInComponent
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent
  },
  {
    path: '',
    redirectTo: '/global/customers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/global/customers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
