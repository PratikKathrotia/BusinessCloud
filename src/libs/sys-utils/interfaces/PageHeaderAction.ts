import { ButtonTypes } from '../enum';

export interface PageHeaderAction {
  label: string;
  icon?: string;
  buttonType: ButtonTypes;
  callback: Function;
}
