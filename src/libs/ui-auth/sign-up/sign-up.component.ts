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

  submit() {
    console.log(this.signUpModel);
  }

}
