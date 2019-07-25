import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '@angular-cm/ui-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  AlertConfig,
  AuthService,
  SetAuthStatus,
  ResetAuthState,
  VariantTypes
} from '@angular-cm/sys-utils';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';

import {
  EmailVerificationDialogComponent
} from '../email-verification-dialog/email-verification-dialog.component';
import {
  ForgotPasswordDialogComponent
} from '../forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  alertConfig: AlertConfig;
  hasError: boolean;
  loginForm: FormGroup;
  loginFormFields: FormlyFieldConfig[];
  loginModel: any;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private dialog: MatDialog,
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({});
    this.loginFormFields = LoginForm;
    this.loginModel = {};
    this.hasError = false;
    this.authService.logoutCurrentUser().then(success => this.store.dispatch(new ResetAuthState()));
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.loginExistingUser(
        this.loginModel.email,
        this.loginModel.password
      ).then(success => {
        const isEmailVerified = this.afAuth.auth.currentUser.emailVerified;
        if (!isEmailVerified) {
          this.openEmailVerificationDialog();
        } else {
          this.handleLoginSeccess();
        }
      }).catch(error => {
        this.handleLoginError(error);
      });
    }
  }

  handleForgotPassword(): void {
    this.dialog.open(
      ForgotPasswordDialogComponent
    ).afterClosed().subscribe(() => {
      console.log('Forgot password email sent');
    });
  }

  handleLoginError(error: any): void {
    this.alertConfig = {
      variant: VariantTypes.ERROR,
      message: error.message
    };
    this.hasError = true;
  }

  handleLoginSeccess(): void {
    const payload = {
      login: true,
      isEmailVerified: this.afAuth.auth.currentUser.emailVerified,
      uid: this.afAuth.auth.currentUser.uid
    };
    this.store.dispatch(new SetAuthStatus(payload));
    this.router.navigate(['global/customers']);
  }

  openEmailVerificationDialog(): void {
    this.dialog.open(
      EmailVerificationDialogComponent
    ).afterClosed().subscribe(() => this.resetComponent());
  }

  resetComponent(): void {
    this.authService.logoutCurrentUser().then(success => {
      this.loginModel = {};
    });
  }

}
