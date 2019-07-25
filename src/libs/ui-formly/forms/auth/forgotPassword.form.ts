import { FormlyFieldConfig } from '@ngx-formly/core';
import { CmValidators } from '../../validators/CmValidators';

export const forgotPasswordForm: FormlyFieldConfig[] = [
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
  }
];
