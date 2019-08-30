import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { LoginForm } from './forms';
import { CmInputComponent } from './components/cm-input/cm-input.component';

@NgModule({
  declarations: [
    CmInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'cm-input', component: CmInputComponent }
      ]
    })
  ],
  exports: [
    CmInputComponent
  ],
  providers: [
    LoginForm
  ]
})
export class UiFormlyModule { }
