import { Action } from '@ngrx/store';
import { PageHeaderConfig } from '../../interfaces';

export enum PageHeaderActionTypes {
  HEADER_CONFIG_INIT = 'HEADER_CONFIG_INIT'
}

export class HeaderConfigInit implements Action {
  readonly type = PageHeaderActionTypes.HEADER_CONFIG_INIT;
  constructor(public payload: PageHeaderConfig) {}
}

export type PageHeaderActions = HeaderConfigInit;
