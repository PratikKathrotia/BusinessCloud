import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '@angular-cm/ui-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  ActionTypes,
  AlertConfig,
  AuthSelectors,
  AuthService,
  Go,
  ResetAuthState,
  VariantTypes,
  ShowLoading,
  HideLoading,
  ToggleSidebaVisibility,
  ToolbarScope,
  SetToolbarScope,
  ResetPageHeader,
  ResetUserState,
  GetEnvInfo,
  LoginUserSuccess,
  UtilityService
} from '@angular-cm/sys-utils';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';

import { EmailVerificationDialogComponent } from '../email-verification-dialog/email-verification-dialog.component';
import { ForgotPasswordDialogComponent } from '../forgot-password-dialog/forgot-password-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  alertConfig: AlertConfig;
  hasError: boolean;
  form: FormGroup;
  formFields: FormlyFieldConfig[];
  model: any;
  subject: Subject<any>;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private loginForm: LoginForm,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.loginForm.initializeForm({});
    this.form = new FormGroup(this.loginForm.initFormControls());
    this.formFields = this.loginForm.getForm();
    this.model = {};
    this.hasError = false;
    this.authService.logoutCurrentUser().subscribe(success => {
      this.store.dispatch(new ResetAuthState());
      this.dispatchActions();
    });
  }

  ngOnDestroy() {
    UtilityService.endStream(this.subject);
  }

  submitForm(): void {
    if (this.form.valid) {
      this.store.dispatch(new ShowLoading());
      this.authService
        .loginExistingUser(this.model.email, this.model.password)
        .subscribe(data => {
          if (data.success) {
            this.handleLoginSuccess(data);
            return;
          }
          this.handleLoginError({
            message: 'Check your credentials and try again'
          });
        });
    }
  }

  handleForgotPassword(): void {
    this.dialog
      .open(ForgotPasswordDialogComponent)
      .afterClosed()
      .subscribe(action => {
        if (action && action === ActionTypes.OK) {
          this.resetComponent();
        }
      });
  }

  handleLoginError(error: any): void {
    this.alertConfig = {
      variant: VariantTypes.ERROR,
      message: error.message
    };
    this.hasError = true;
    this.store.dispatch(new HideLoading());
  }

  handleLoginSuccess(userData): void {
    const payload = {
      isLoggedIn: true,
      accountId: userData.account as number,
      userId: userData.user as number
    };
    this.store.dispatch(new LoginUserSuccess(payload));
    this.store.dispatch(
      new GetEnvInfo({
        user: payload.userId
      })
    );
    this.subscribeEnvDetails();
  }

  openEmailVerificationDialog(): void {
    this.dialog
      .open(EmailVerificationDialogComponent)
      .afterClosed()
      .subscribe(() => this.resetComponent());
  }

  resetComponent(): void {
    this.authService.logoutCurrentUser().subscribe(success => {
      this.form.reset();
      this.model = {};
    });
  }

  dispatchActions(): void {
    this.store.dispatch(new ResetUserState());
    this.store.dispatch(new ToggleSidebaVisibility(false));
    this.store.dispatch(new SetToolbarScope(ToolbarScope.AUTH_LEVEL));
    this.store.dispatch(new ResetPageHeader());
    this.listen();
  }

  listen(): void {
    // this.subscribeAuthStatus();
    // this.subscribeEnvDetails();
  }

  subscribeAuthStatus(): void {
    this.store
      .pipe(select(AuthSelectors.selectAuthStatus), takeUntil(this.subject))
      .subscribe(state => {
        if (sessionStorage.getItem('access_token') && state.login) {
          this.store.dispatch(
            new GetEnvInfo({
              user: state.user
            })
          );
        }
      });
  }

  subscribeEnvDetails(): void {
    this.store
      .pipe(select(AuthSelectors.selectEnvStatus), takeUntil(this.subject))
      .subscribe(env => {
        if (env) {
          this.store.dispatch(new HideLoading());
          this.store.dispatch(
            new Go({
              path: ['global/customers']
            })
          );
        }
      });
  }
}
