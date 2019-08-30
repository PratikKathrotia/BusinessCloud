import { TabularFormConfig } from '@angular-cm/sys-utils';
import { SelectOptions } from '../../options/selectOptions';
import { CmValidators } from '../../validators/CmValidators';

export const SignUpForm: TabularFormConfig = {
  tabs: [
    {
      label: 'Personal',
      fields: [
        {
          key: 'firstName',
          type: 'cm-header1',
          templateOptions: {
            type: 'string',
            label: 'Firstname',
            placeholder: 'Enter your first name',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'input',
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
          type: 'input',
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
          type: 'input',
          templateOptions: {
            type: 'tel',
            label: 'Phone',
            placeholder: '(123) 456-7890',
            required: true
          },
          validators: {
            validation: CmValidators.Phone
          }
        }
      ]
    },
    {
      label: 'Address',
      fields: [
        {
          key: 'street1',
          type: 'input',
          templateOptions: {
            label: 'Address Line 1',
            placeholder: 'Enter your street',
            required: true
          }
        },
        {
          key: 'street2',
          type: 'input',
          templateOptions: {
            label: 'Address Line 2'
          }
        },
        {
          key: 'city',
          type: 'input',
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
            required: true,
            options: setSelectOptions('state')
          }
        },
        {
          key: 'zip',
          type: 'input',
          templateOptions: {
            type: 'string',
            label: 'Zip',
            required: true
          },
          validators: {
            validation: CmValidators.Zip
          }
        }
      ]
    },
    {
      label: 'Payment',
      fields: [
        {
          key: 'paymentMethod',
          type: 'select',
          templateOptions: {
            type: 'string',
            label: 'Payment Method',
            placeholder: 'Select payment method',
            required: true,
            options: setSelectOptions('paymentMethod')
          }
        },
        {
          key: 'bank',
          type: 'input',
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
          type: 'input',
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
          type: 'input',
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
          type: 'input',
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
            required: true,
            options: setSelectOptions('cardType')
          },
          hideExpression: 'model.paymentMethod !== "card"'
        },
        {
          key: 'nameOnCard',
          type: 'input',
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
          type: 'input',
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
          type: 'input',
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
          type: 'input',
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
          type: 'input',
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
        }
      ]
    },
    {
      label: 'Login',
      fields: [
        {
          key: 'userEmail',
          type: 'input',
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
          key: 'passwordGroup',
          validators: {
            fieldMatch: {
              expression: (control) => {
                const value = control.value;
                return value.confirmPassword === value.password
                  || (!value.confirmPassword || !value.password);
              },
              message: 'Password Not Matching',
              errorPath: 'confirmPassword',
            },
          },
          fieldGroup: [
            {
              key: 'password',
              type: 'input',
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
              type: 'input',
              templateOptions: {
                type: 'password',
                label: 'Confirm Password',
                placeholder: 'Please re-enter your password',
                required: true,
              }
            }
          ]
        }
      ]
    }
  ]
};

function setSelectOptions(field: string) {
  return SelectOptions[field] ? SelectOptions[field] : [];
}
