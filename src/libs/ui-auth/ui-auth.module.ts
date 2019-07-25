import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { UiMaterialModule } from '@angular-cm/ui-material';
import { UiGlobalModule } from '@angular-cm/ui-global';
import { UiCommonModule } from '../ui-common/ui-common.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';
import {
  EmailVerificationDialogComponent
} from './email-verification-dialog/email-verification-dialog.component';
import {
  ForgotPasswordDialogComponent
} from './forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    EmailVerificationDialogComponent,
    ForgotPasswordDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiCommonModule,
    UiMaterialModule,
    UiGlobalModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMatDatepickerModule
  ],
  entryComponents: [
    EmailVerificationDialogComponent,
    ForgotPasswordDialogComponent
  ]
})
export class UiAuthModule { }
