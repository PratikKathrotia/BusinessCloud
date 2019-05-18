import { ToolbarScope } from '../enum';

export interface UtilsState {
  toolbarLevel: ToolbarScope;
}

export const initialUtilsState: UtilsState = {
  toolbarLevel: null
};

