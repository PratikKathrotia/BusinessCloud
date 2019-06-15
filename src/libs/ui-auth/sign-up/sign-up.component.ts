import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { SignUpForm } from '@angular-cm/ui-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TabConfig } from '@angular-cm/sys-utils';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormArray;
  signUpFormFields: FormlyFieldConfig[];
  signUpModel: any;
  tabs: TabConfig[];

  constructor() { }

  ngOnInit() {
    this.tabs = SignUpForm.tabs;
    this.signUpModel = {};
    this.signUpForm = new FormArray(SignUpForm.tabs.map(() => new FormGroup({})));
  }

  get isSubmitDisabled(): boolean {
    return this.signUpForm && this.signUpForm.invalid;
  }

  isTabDisabled(index: number): boolean {
    return index !== 0 && !this.signUpForm.at(index - 1).valid;
  }

  isLoginTab(tab: TabConfig): boolean {
    return tab.label === 'Login';
  }

  isPaymentTab(tab: TabConfig): boolean {
    return tab.label === 'Payment';
  }

  handleFormSubmit() {
    console.log(this.signUpModel);
  }

}
