import { Injectable } from '@angular/core';
import { BaseFormGenerator } from '../../services/base-form-generator';
import { CmValidators } from '../../validators/CmValidators';

@Injectable()
export class CustomerForm extends BaseFormGenerator {
  public initializeForm(opts: any) {
    this._form = [
      {
        key: 'customer_name',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Customer Name',
          placeholder: 'Enter customer name',
          required: true
        }
      },
      {
        key: 'customer_org',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Customer Account Balance',
          placeholder: 'Enter customer account balance',
          required: true
        }
      },
      {
        key: 'customer_email',
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
        key: 'customer_phone',
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
        key: 'customer_address.country',
        type: 'cm-select',
        templateOptions: {
          label: 'Country',
          options: [
            {
              label: 'United States',
              value: 'USA'
            },
            { label: 'Europe', value: 'europe' }
          ]
        }
      },
      {
        key: 'customer_address.street',
        type: 'cm-input',
        templateOptions: {
          label: 'Street',
          placeholder: 'Enter your street',
          required: true
        }
      },
      {
        key: 'customer_address.city',
        type: 'cm-input',
        templateOptions: {
          label: 'City',
          placeholder: 'Enter city',
          required: true
        }
      },
      {
        key: 'customer_address.state',
        type: 'cm-select',
        templateOptions: {
          label: 'State',
          options: [
            { label: 'California', value: 'CA' },
            { label: 'Arizona', value: 'AZ' }
          ],
          required: true
        }
      },
      {
        key: 'customer_address.zip',
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
        key: 'integrations',
        type: 'cm-header3',
        templateOptions: {
          label: 'Integrations'
        }
      },
      {
        key: 'cloud_manager',
        type: 'cm-input',
        templateOptions: {
          type: 'string',
          label: 'Associate cloud manager'
        }
      }
    ];
  }
}
