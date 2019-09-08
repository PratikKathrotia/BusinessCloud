import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectQueryParams,
  CustomerSelectors
} from '@angular-cm/sys-utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  subject: Subject<any>;

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();

    this.store$.pipe(
      select(CustomerSelectors.selectCustomer),
      takeUntil(this.subject)
    ).subscribe(customer => console.log(customer));
  }

}
