import { ButtonTypes } from '../enum';

export interface PageHeaderAction {
  id: string;
  label: string;
  icon?: string;
  buttonType: ButtonTypes;
  callback?: Function;
}
