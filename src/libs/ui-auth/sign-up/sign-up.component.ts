import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SignUpForm } from '@angular-cm/ui-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Store, select } from '@ngrx/store';
import {
  AuthService,
  User,
  UtilityService,
  BankPayment,
  CardPayment,
  AddNewUser,
  UserSelectors,
  AddNewUserError,
  Roles,
  ToggleSidebaVisibility,
  SetToolbarScope,
  ToolbarScope,
  ResetPageHeader,
  ResetAuthState
} from '@angular-cm/sys-utils';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  formFields: FormlyFieldConfig[];
  model: any;

  constructor(
    private authService: AuthService,
    private store$: Store<any>,
    private signUpForm: SignUpForm,
    private router: Router,
    private utilService: UtilityService,
  ) { }

  ngOnInit() {
    this.signUpForm.initializeForm({});
    this.model = {};
    this.form = new FormGroup(this.signUpForm.initFormControls());
    this.formFields = [ ...this.signUpForm.getForm() ];
    this.authService.logoutCurrentUser().then(success => {
      this.store$.dispatch(new ResetAuthState());
      sessionStorage.removeItem('userToken');
      this.dispatchActions();
    });
  }

  // get isSubmitDisabled(): boolean {
  //   return this.signUpForm && this.signUpForm.invalid;
  // }

  configureUserToSave(uid: string): User {
    const formVals = this.utilService.copy(this.model);
    const isCard = formVals.paymentMethod === 'card';
    const user: User = {
      id: this.utilService.copy(uid),
      firstName: formVals.firstName,
      lastName: formVals.lastName,
      birthDate: formVals.dateOfBirth,
      email: formVals.email,
      phone: formVals.phone,
      address: {
        street: this.getStreetAddress(formVals),
        city: formVals.city,
        state: formVals.state,
        zip: formVals.zip
      },
      paymentMethod: formVals.paymentMethod,
      payment: this.getPaymentDetails(formVals, isCard),
      account: this.utilService.generateAccountId(),
      role: Roles.ROOT_USER
    };
    return user;
  }

  getStreetAddress(model: any): string {
    if (model.street1 && model.street2) {
      return `${model.street1} ${model.street2}`;
    }
    return model.street1;
  }

  getPaymentDetails(model: any, isCard: boolean): BankPayment | CardPayment {
    if (isCard) {
      return {
        cardType: model.cardType,
        cardNumber: model.cardNumber,
        nameOnCard: model.nameOnCard,
        cvv: model.cvv,
        expire: model.expiry,
        zip: model.cardZip
      };
    }
    return {
      bankName: model.bank,
      nameOnAccount: model.nameOnAccount,
      account: model.account,
      routing: model.routing
    };
  }

  handleFormSubmit() {
    if (this.form.valid) {
      const credentials = {
        email: this.model['sameAsPersonal'] ?
          this.model['email'] : this.model['userEmail'],
        password: this.model['passwordGroup']['password']
      };
      this.authService.signUpNewUser(
        credentials.email, credentials.password
      ).then(success => {
        const payload = this.configureUserToSave(success.user.uid);
        this.store$.dispatch(new AddNewUser(payload));
      }).catch(error => {
        this.store$.dispatch(new AddNewUserError({
          message: error,
          isCritical: true
        }));
      });
    }
  }

  logoutAndRouteToLogin(isComplete: boolean) {
    if (isComplete) {
      this.authService.logoutCurrentUser().then(() => {
        this.router.navigate(['auth/login']);
      });
    }
  }

  dispatchActions(): void {
    this.store$.dispatch(new ToggleSidebaVisibility(false));
    this.store$.dispatch(new SetToolbarScope(ToolbarScope.AUTH_LEVEL));
    this.store$.dispatch(new ResetPageHeader());
    this.listen();
  }

  listen() {
    this.store$.pipe(
      select(UserSelectors.selectUserAddSuccess)
    ).subscribe(state => {
      this.logoutAndRouteToLogin(state);
    });
  }

}
