import { Injectable } from '@angular/core';
import { BaseFormGenerator } from '../../services/base-form-generator';
import { CmValidators } from '../../validators/CmValidators';

@Injectable()
export class CustomerForm extends BaseFormGenerator {

  public initializeForm(opts: any) {
    this._form = [
      {
        // customer form will go here, once the contract is final
      }
    ];
  }
}

