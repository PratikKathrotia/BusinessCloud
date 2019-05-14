import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { pageHeaderSelectors, PageHeaderConfig, HeaderActionClicked } from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  subject: Subject<any>;
  headerConfig: PageHeaderConfig;
  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.listen();
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

  get config() {
    if (this.headerConfig) {
      return this.headerConfig;
    }
  }

  handleActionClick(index: number) {
    this.store$.dispatch(new HeaderActionClicked(this.headerConfig.actions[index]['id']));
  }

  listen() {
    this.store$.pipe(
      select(pageHeaderSelectors.selectHeaderConfig),
      takeUntil(this.subject)
    ).subscribe(config => {
      if (config) {
        this.headerConfig = config;
      }
    });
  }

}
