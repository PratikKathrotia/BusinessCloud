import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  LoadingSelectors,
  UtilityService
} from '@angular-cm/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  showLoading: boolean;
  subject: Subject<any>;

  constructor(
    private store$: Store<any>,
    private utilService: UtilityService
  ) { }

  get isShowing(): boolean {
    return this.showLoading;
  }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.listen();
  }

  ngOnDestroy(): void {
    UtilityService.endStream(this.subject);
  }

  listen(): void {
    this.store$.pipe(
      select(LoadingSelectors.selectLoadingState),
      takeUntil(this.subject)
    ).subscribe(showLoading => {
      console.log(showLoading);
      this.showLoading = this.utilService.copy(showLoading);
    });
  }

}
