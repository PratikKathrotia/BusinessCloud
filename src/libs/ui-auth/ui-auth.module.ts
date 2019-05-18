import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiMaterialModule } from '@angular-cm/ui-material';
import { UiGlobalModule } from '@angular-cm/ui-global';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiMaterialModule,
    UiGlobalModule
  ]
})
export class UiAuthModule { }
