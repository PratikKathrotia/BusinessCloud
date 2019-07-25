import { FormlyFieldConfig } from '@ngx-formly/core';
import { CmValidators } from '../../validators/CmValidators';

export const LoginForm: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      required: true
    },
    validators: {
      validation: CmValidators.Email
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      required: true
    }
  }
];

