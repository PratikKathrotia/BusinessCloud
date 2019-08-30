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
        key: 'organization',
        type: 'cm-header3',
        templateOptions: {
          label: 'Organization'
        }
      },
      {
        key: 'firstName',
        type: 'cm-input',
        className: 'formField__Standard__Width',
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
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Lastname',
          placeholder: 'Enter your last name',
          required: true
        }
      },
      {
        key: 'dateOfBirth',
        type: 'datepicker',
        templateOptions: {
          label: 'Birthday',
          placeholder: 'MM/DD/YYYY'
        }
      },
      {
        key: 'email',
        type: 'cm-input',
        className: 'formField__Standard__Width',
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
        className: 'formField__Standard__Width',
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
        key: 'street1',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          label: 'Address Line 1',
          placeholder: 'Enter your street',
          required: true
        }
      },
      {
        key: 'street2',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          label: 'Address Line 2'
        }
      },
      {
        key: 'city',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          label: 'City',
          required: true
        }
      },
      {
        key: 'state',
        type: 'select',
        templateOptions: {
          label: 'State',
          required: true
        }
      },
      {
        key: 'zip',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Zip',
          required: true
        },
        validators: {
          validation: CmValidators.Zip
        }
      },
      {
        key: 'paymentMethod',
        type: 'select',
        templateOptions: {
          type: 'string',
          label: 'Payment Method',
          placeholder: 'Select payment method',
          required: true
        }
      },
      {
        key: 'bank',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Bank Name',
          placeholder: 'Enter bank name',
          required: true
        },
        hideExpression: 'model.paymentMethod !== "cheque"'
      },
      {
        key: 'nameOnAccount',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Name on account',
          placeholder: 'Enter name on account',
          required: true
        },
        hideExpression: 'model.paymentMethod !== "cheque"'
      },
      {
        key: 'account',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Account number',
          placeholder: 'Enter account number',
          required: true
        },
        validators: {
          validation: CmValidators.Account
        },
        hideExpression: 'model.paymentMethod !== "cheque"'
      },
      {
        key: 'routing',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Routing number',
          placeholder: 'Enter routing number',
          required: true
        },
        validators: {
          validation: CmValidators.Routing
        },
        hideExpression: 'model.paymentMethod !== "cheque"'
      },
      {
        key: 'cardType',
        type: 'select',
        templateOptions: {
          type: 'string',
          label: 'Card Type',
          required: true
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'nameOnCard',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Name on Card',
          placeholder: 'Enter name on the card',
          required: true
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'cardNumber',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Card Number',
          placeholder: '1234 5678 9012 3456',
          required: true
        },
        validators: {
          validation: CmValidators.CardNumber
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'expiry',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'Expiry Date',
          placeholder: 'MM/YY',
          required: true
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'cvv',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'password',
          label: 'Security Code',
          placeholder: 'XXX',
          required: true
        },
        validators: {
          validation: CmValidators.Cvv
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'cardZip',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'string',
          label: 'ZIP',
          placeholder: '12345',
          required: true
        },
        validators: {
          validation: CmValidators.Zip
        },
        hideExpression: 'model.paymentMethod !== "card"'
      },
      {
        key: 'userEmail',
        type: 'cm-input',
        className: 'formField__Standard__Width',
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
        type: 'checkbox',
        templateOptions: {
          label: 'Check if same as personal email'
        }
      },
      {
        key: 'password',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'password',
          label: 'Password',
          required: true,
        },
        validators: {
          validation: CmValidators.Password
        },
      },
      {
        key: 'confirmPassword',
        type: 'cm-input',
        className: 'formField__Standard__Width',
        templateOptions: {
          type: 'password',
          label: 'Confirm Password',
          placeholder: 'Please re-enter your password',
          required: true,
        }
      }
    ];
  }
}


