import { Action } from '@ngrx/store';
import { PageHeaderConfig } from '../../interfaces';

export enum PageHeaderActionTypes {
  HEADER_CONFIG_INIT = 'HEADER_CONFIG_INIT',
  HEADER_ACTION_CLICKED = 'HEADER_ACTION_CLICKED'
}

export class HeaderConfigInit implements Action {
  readonly type = PageHeaderActionTypes.HEADER_CONFIG_INIT;
  constructor(public payload: PageHeaderConfig) {}
}

export class HeaderActionClicked implements Action {
  readonly type = PageHeaderActionTypes.HEADER_ACTION_CLICKED;
  constructor(public payload: number) {}
}

export type PageHeaderActions = HeaderConfigInit | HeaderActionClicked;
