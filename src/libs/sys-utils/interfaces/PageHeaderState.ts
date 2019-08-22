import { PageHeaderConfig } from './PageHeaderConfig';

export interface PageHeaderState {
  isVisible: boolean;
  isFetching: boolean;
  config: PageHeaderConfig;
  actionId: string | null;
}
