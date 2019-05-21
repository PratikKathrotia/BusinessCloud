import { FormlyFieldConfig } from '@ngx-formly/core';

export const LoginForm: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'email',
    templateOptions: {
      label: 'Email',
      placeholder: 'Enter Email',
      required: true
    }
  },
  {
    key: 'password',
    type: 'password',
    templateOptions: {
      label: 'Password',
      placeholder: 'Enter Password',
      required: true
    }
  }
];

