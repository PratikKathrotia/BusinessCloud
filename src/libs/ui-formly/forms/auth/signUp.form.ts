import { Injectable } from '@angular/core';
import { BaseFormGenerator } from '../../services/base-form-generator';
import { CmValidators } from '../../validators/CmValidators';

@Injectable()
export class SignUpForm extends BaseFormGenerator {

  public initializeForm(opts) {
    this._form = [
      {
        key: 'signup',
        type: 'cm-header1',
        templateOptions: {
          label: 'Create Account'
        }
      },
      {
        key: 'organization-header',
        type: 'cm-header3',
        templateOptions: {
          label: 'Organization'
        }
      },
      {
        key: 'organization',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Organization Name',
          placeholder: 'Enter your organization name',
          required: true
        }
      },
      {
        key: 'firstName',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Firstname',
          placeholder: 'Enter your first name',
          required: true
        }
      },
      {
        key: 'lastName',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Lastname',
          placeholder: 'Enter your last name',
          required: true
        }
      },
      {
        key: 'email',
        type: 'cm-input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'example@xyz.com',
          required: true
        },
        validators: {
          validation: CmValidators.Email
        }
      },
      {
        key: 'phone',
        type: 'cm-input',
        templateOptions: {
          type: 'tel',
          label: 'Phone',
          placeholder: '(123) 456-7890',
          required: true
        },
        validators: {
          validation: CmValidators.Phone
        }
      },
      {
        key: 'address',
        type: 'cm-header3',
        templateOptions: {
          label: 'Address details'
        }
      },
      {
        key: 'street1',
        type: 'cm-input',
        templateOptions: {
          label: 'Address Line 1',
          placeholder: 'Enter your street',
          required: true
        }
      },
      {
        key: 'street2',
        type: 'cm-input',
        templateOptions: {
          label: 'Address Line 2'
        }
      },
      {
        key: 'city',
        type: 'cm-input',
        templateOptions: {
          label: 'City',
          placeholder: 'Enter city',
          required: true
        }
      },
      {
        key: 'state',
        type: 'cm-select',
        templateOptions: {
          label: 'State',
          options: [{label: 'California', value: 'CA'}, {label: 'Arizona', value: 'AZ'}],
          required: true
        }
      },
      {
        key: 'zip',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Zip',
          placeholder: 'Enter 5-digit zip',
          required: true
        },
        validators: {
          validation: CmValidators.Zip
        }
      },
      {
        key: 'payment',
        type: 'cm-header3',
        templateOptions: {
          label: 'Payment details'
        }
      },
      {
        key: 'paymentMethod',
        type: 'cm-select',
        templateOptions: {
          type: 'string',
          label: 'Payment Method',
          options: [
            {label: 'Credit / Debit card', value: 'card'},
            {label: 'Electronic transfer', value: 'cheque'}
          ],
          required: true
        }
      },
      {
        key: 'bank',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Bank Name',
          placeholder: 'Enter bank name',
          required: true
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "card"'
      },
      {
        key: 'nameOnAccount',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Name on account',
          placeholder: 'Enter name on account',
          required: true
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "card"'
      },
      {
        key: 'account',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Account number',
          placeholder: 'Enter account number',
          required: true
        },
        validators: {
          validation: CmValidators.Account
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "card"'
      },
      {
        key: 'routing',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Routing number',
          placeholder: 'Enter routing number',
          required: true
        },
        validators: {
          validation: CmValidators.Routing
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "card"'
      },
      {
        key: 'cardType',
        type: 'cm-select',
        templateOptions: {
          type: 'string',
          label: 'Card Type',
          options: [
            {label: 'Master', value: 'master'},
            {label: 'Visa', value: 'visa'}
          ],
          required: true
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'nameOnCard',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Name on Card',
          placeholder: 'Enter name on the card',
          required: true
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'cardNumber',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Card Number',
          placeholder: '1234 5678 9012 3456',
          required: true
        },
        validators: {
          validation: CmValidators.CardNumber
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'expiry',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Expiry Date',
          placeholder: 'MM/YY',
          required: true
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'cvv',
        type: 'cm-input',
        templateOptions: {
          type: 'password',
          label: 'Security Code',
          placeholder: 'XXX',
          required: true
        },
        validators: {
          validation: CmValidators.Cvv
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'cardZip',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'ZIP',
          placeholder: '12345',
          required: true
        },
        validators: {
          validation: CmValidators.Zip
        },
        hideExpression: '!model.paymentMethod || model.paymentMethod === "cheque"'
      },
      {
        key: 'credentials',
        type: 'cm-header3',
        templateOptions: {
          label: 'Credentials'
        }
      },
      {
        key: 'userEmail',
        type: 'cm-input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'example@xyz.com',
          required: true,
        },
        validators: {
          validation: CmValidators.Email
        },
        hideExpression: 'model.sameAsPersonal === true'
      },
      {
        key: 'sameAsPersonal',
        type: 'cm-checkbox',
        templateOptions: {
          label: 'Check if same as personal email'
        }
      },
      {
        key: 'password',
        type: 'cm-input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          required: true,
        },
        validators: {
          validation: CmValidators.Password
        },
      },
      {
        key: 'confirmPassword',
        type: 'cm-input',
        templateOptions: {
          type: 'password',
          label: 'Confirm Password',
          placeholder: 'Please re-enter password',
          required: true,
        }
      },
      {
        key: 'userType',
        type: 'cm-select',
        templateOptions: {
          label: 'User type',
          options: [
            {label: 'Root user', value: 'root_user'},
            {label: 'Admin', value: 'admin'},
            {label: 'General user', value: 'general'},
            {label: 'Read only', value: 'read_only'}
          ],
          defaultValue: 'read_only',
          required: true
        }
      }
    ];
  }
}


