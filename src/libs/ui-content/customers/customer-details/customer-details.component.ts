import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectQueryParams } from '@angular-cm/sys-utils';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit() {
    this.store$.pipe(
      select(selectQueryParams)
    ).subscribe(params => {
      if (params && params.customer_id) {
        console.log(params.customer_id);
      }
    });
  }

}
