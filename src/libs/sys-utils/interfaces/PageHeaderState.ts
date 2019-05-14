import { PageHeaderConfig } from './PageHeaderConfig';

export interface PageHeaderState {
  isFetching: boolean;
  config: PageHeaderConfig;
  actionId: string | null;
}
