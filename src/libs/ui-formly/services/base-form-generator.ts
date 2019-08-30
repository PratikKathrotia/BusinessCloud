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

  public setTemplateOptions(fieldName: string, opts: any): void {
    this.setDeepTemplateOptions(this._form, fieldName, opts);
  }

}

