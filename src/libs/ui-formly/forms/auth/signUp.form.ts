import { TabularFormConfig } from '@angular-cm/sys-utils';

export const SignUpForm: TabularFormConfig = {
  tabs: [
    {
      label: 'Personal Info',
      fields: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'Firstname',
            required: true
          }
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Lastname',
            required: true
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
            required: true
          }
        },
        {
          key: 'street2',
          type: 'input',
          templateOptions: {
            label: 'Address Line 1',
            required: true
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
          type: 'input',
          templateOptions: {
            label: 'State / Region',
            required: true
          }
        },
        {
          key: 'zip',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            required: true
          }
        }
      ]
    }
  ]
};
