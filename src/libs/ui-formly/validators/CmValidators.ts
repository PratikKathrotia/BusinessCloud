import {
  FormControl,
  ValidationErrors
} from '@angular/forms';

export function PhoneValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{9}$/.test(control.value) ? null : { invalidPhone: true };
}

export function EmailValidator(control: FormControl): ValidationErrors {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value) ?
    null : { invalidEmail: true };
}

export function ZipValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{4}$/.test(control.value) ? null : { invalidZip: true };
}

export function BankAccValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{9}$/.test(control.value) ? null : { invalidAccount: true };
}

export function BankRoutValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{8}$/.test(control.value) ? null : { invalidRouting: true };
}

export function CardNumberValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{15}$/.test(control.value) ? null : { invalidCard: true };
}

export function CvvValidator(control: FormControl): ValidationErrors {
  return /^[1-9]\d{2}$/.test(control.value) ? null : { invalidCvv: true };
}

export function PasswordValidator(control: FormControl): ValidationErrors {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(control.value) ?
    null : { invalidPassword: true };
}

export const CmValidators = {
  Phone: [
    PhoneValidator
  ],
  Email: [
    EmailValidator
  ],
  Zip: [
    ZipValidator
  ],
  Account: [
    BankAccValidator
  ],
  Routing: [
    BankRoutValidator
  ],
  CardNumber: [
    CardNumberValidator
  ],
  Cvv: [
    CvvValidator
  ],
  Password: [
    PasswordValidator
  ]
};

export const CmValidatorsMap = [
  { name: 'invalidEmail', validation: EmailValidator },
  { name: 'invalidPhone', validation: PhoneValidator },
  { name: 'invalidZip', validation: ZipValidator },
  { name: 'invalidAccount', validation: BankAccValidator },
  { name: 'invalidRouting', validation: BankRoutValidator },
  { name: 'invalidCard', validation: CardNumberValidator },
  { name: 'invalidCvv', validation: CvvValidator },
  { name: 'invalidPassword', validation: PasswordValidator }
];

