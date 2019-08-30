export const CmValidationMessages = [
  { name: 'required', message: 'This field is required' },
  { name: 'invalidPhone', message: 'Please enter 10 digit phone number' },
  { name: 'invalidEmail', message: 'Please enter valid email address' },
  { name: 'invalidZip', message: 'Please enter 5 digit zip code' },
  { name: 'invalidAccount', message: 'Please enter 10 digit bank account number' },
  { name: 'invalidRouting', message: 'Please enter 9 digit bank routing number' },
  { name: 'invalidCard', message: 'Please enter 16 digit card number' },
  { name: 'invalidCvv', message: 'Please enter 3 digit CVV number on back of your card' },
  {
    name: 'invalidPassword',
    message: 'Password must be 8-20 characters long and include one uppercase letter, ' +
      'one lowecase letter and one numeric digit'
  }
];

export function getErrorMsg(key: string): string {
  let errorMsg = '';
  CmValidationMessages.forEach(error => {
    if (error.name === key) {
      errorMsg = error.message;
    }
  });
  return errorMsg;
}

