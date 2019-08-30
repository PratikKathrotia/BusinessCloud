import { Injectable } from '@angular/core';
import { BaseFormGenerator } from '../../services/base-form-generator';
import { CmValidators } from '../../validators/CmValidators';

@Injectable()
export class LoginForm extends BaseFormGenerator {

  public initializeForm(opts) {
    this._form = [
      {
        key: 'email',
        type: 'cm-input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
          required: true
        },
        validators: {
          validation: CmValidators.Email
        }
      },
      {
        key: 'password',
        type: 'cm-input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          required: true
        }
      }
    ];
  }

}

