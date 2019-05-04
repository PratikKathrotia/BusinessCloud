import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  HeaderConfigInit,
  PageHeaderConfig,
  ButtonTypes,
  pageHeaderSelectors,
  HeaderActionClicked
} from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  pageHeaderConfig: PageHeaderConfig;
  subject: Subject<any>;

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.pageHeaderConfig = {
      title: 'Customers',
      actions: [
        {
          label: 'Add Customer',
          buttonType: ButtonTypes.PRIMARY,
          callback: this.handleAddCustomerClick
        },
        {
          label: 'Cancel',
          buttonType: ButtonTypes.ACCENT,
          callback: this.handleCancelClick
        }
      ]
    };
    this.store$.dispatch(new HeaderConfigInit(this.pageHeaderConfig));
    this.listen();
  }

  handleAddCustomerClick() {
    console.log('Add Customer clicked');
  }

  handleCancelClick() {
    console.log('Cancel clicked');
  }

  listen() {
    this.store$.pipe(
      select(pageHeaderSelectors.selectHeaderActionIndex),
      takeUntil(this.subject)
    ).subscribe(index => {
      if (this.pageHeaderConfig && this.pageHeaderConfig.actions &&
        this.pageHeaderConfig.actions[index]) {
        this.pageHeaderConfig.actions[index].callback();
        this.store$.dispatch(new HeaderActionClicked(null));
      }
    });
  }

}
