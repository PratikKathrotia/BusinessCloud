import { FieldType } from '@ngx-formly/core';
import { getErrorMsg } from '../../validators/CmValidationMessages';

export class CmFieldType extends FieldType {
  public get templateOptions(): any {
    return this.to;
  }

  public get isInvalid(): boolean {
    const showError =
      this.options && this.options.showError && this.options.showError(this);

    // If form control is touched OR dirty
    if (
      this.formControl &&
      (this.formControl.touched || this.formControl.dirty || showError)
    ) {
      const hasErrors =
        (this.formControl.errors &&
          Object.keys(this.formControl.errors).length > 0) || false;

      const isInvalid = this.formControl.invalid;
      return hasErrors || isInvalid;
    }
    return false;
  }

  public get errors(): any[] {
    let allErrors = [];

    if (this.formControl && this.formControl.errors) {
      allErrors = Object.keys(this.formControl.errors).map(errorType => ({
        message: getErrorMsg(errorType),
        value: this.formControl.errors[errorType]
      }));
    }
    return allErrors;
  }

  protected getTemplateOptionField(fieldName: string, defaultValue: any) {
    return this.templateOptions[fieldName] || defaultValue;
  }

  protected handleCallbacks(callbackName: string, callbackArgs: any): any {
    if (this.templateOptions[callbackName]) {
      this.templateOptions[callbackName](callbackArgs);
    }
  }

}

