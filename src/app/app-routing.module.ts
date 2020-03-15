import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  CustomerListComponent,
  CustomerDialogLauncherComponent
} from '@angular-cm/ui-content';
import { UnauthorizedPageComponent } from '@angular-cm/ui-common';
import {
  SignInComponent,
  SignUpComponent
} from '@angular-cm/ui-auth';
import { AuthGuard, PermissionGuard, Permissions } from '@angular-cm/sys-utils';

const routes: Routes = [
  {
    path: 'global/customers',
    component: CustomerListComponent,
    canActivate: [ AuthGuard, PermissionGuard ],
    data: {
      // permissions: [
      //   Permissions.CUSTOMER_ACCESS
      // ]
    }
  },
  {
    path: 'global/customer-details',
    component: CustomerDialogLauncherComponent,
    canActivate: [ AuthGuard, PermissionGuard ],
    data: {
      permissions: [
        Permissions.CUSTOMER_ACCESS,
        Permissions.CUSTOMER_ADD,
        Permissions.CUSTOMER_UPDATE
      ]
    }
  },
  {
    path: 'global/unauthorized',
    component: UnauthorizedPageComponent
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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
