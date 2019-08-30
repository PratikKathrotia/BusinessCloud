import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { UiMaterialModule } from '@angular-cm/ui-material';

import {
  LoginForm,
  SignUpForm
} from './forms';

import { CmInputComponent } from './components/cm-input/cm-input.component';
import { CmHeader1Component } from './components/cm-header1/cm-header1.component';
import { CmHeader3Component } from './components/cm-header3/cm-header3.component';
import { CmSelectComponent } from './components/cm-select/cm-select.component';

@NgModule({
  declarations: [
    CmInputComponent,
    CmHeader1Component,
    CmHeader3Component,
    CmSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'cm-input', component: CmInputComponent },
        { name: 'cm-header1', component: CmHeader1Component },
        { name: 'cm-header3', component: CmHeader3Component }
      ]
    }),
    UiMaterialModule
  ],
  exports: [
    CmInputComponent,
    CmHeader1Component,
    CmHeader3Component
  ],
  providers: [
    LoginForm,
    SignUpForm
  ]
})
export class UiFormlyModule { }
