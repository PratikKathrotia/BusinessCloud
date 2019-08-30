import { AbstractControl, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export abstract class BaseFormGenerator {
  protected _form: Array<any>;
  abstract initializeForm(opt?: any): void;

  private setDeepTemplateOptions(fields: FormlyFieldConfig[], key: string, opts: object): boolean {
    let found = false;
    for (let i = 0; i < fields.length; i++) {
      if (fields[i]['key'] === key) {
        fields[i] = {
          ...fields[i],
          ...{
            templateOptions: {
              ...fields[i]['templateOptions'],
              ...opts
            }
          }
        };
        found = true;
        break;
      }
      if (fields[i]['fieldGroup'] &&
        this.setDeepTemplateOptions(fields[i]['fieldGroup'], key, opts)) {
        found = true;
        break;
      }
    }
    return found;
  }

  private initDeepFormControls(fields: FormlyFieldConfig[]): { [key: string]: AbstractControl; } {
    let controls: { [key: string]: AbstractControl; } = {};
    for (let i = 0; i < (fields || []).length; i++) {
      if (fields[i]['type'] && fields[i]['type'] !== 'text') {
        if (!fields[i].formControl) {
          if (fields[i]['validators'] && fields[i]['validators']['validation']) {
            fields[i].formControl = new FormControl(
              false,
              fields[i]['validators']['validation']
            );
          } else {
            fields[i].formControl = new FormControl(false);
          }
        }
        controls[fields[i]['key']] = fields[i].formControl;
      }
      if (fields[i]['fieldGroup']) {
        controls = { ...controls, ...this.initDeepFormControls(fields[i]['fieldGroup']) };
      }
    }
    return controls;
  }

  public getForm(): Array<any> {
    return this._form;
  }

  public setTemplateOptions(fieldName: string, opts: any): void {
    this.setDeepTemplateOptions(this._form, fieldName, opts);
  }

  public initFormControls(): { [key: string]: AbstractControl; } {
    return this.initDeepFormControls(this._form);
  }

}

