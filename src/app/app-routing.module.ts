import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalLayoutComponent } from '@angular-cm/ui-global';
import {
  CustomerListComponent,
  CustomerDetailsComponent
} from '@angular-cm/ui-content';
import {
  AuthComponent,
  SignInComponent,
  SignUpComponent
} from '@angular-cm/ui-auth';
import { AuthGuard } from '@angular-cm/sys-utils';

const routes: Routes = [
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
      },
      {
        path: 'customer-details/:id',
        component: CustomerDetailsComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/global',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/global'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
