import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  CustomerSelectors,
  GetCustomers,
  HeaderConfigInit,
  PageHeaderConfig,
  ButtonTypes,
  pageHeaderSelectors,
  HeaderActionClicked,
  CustomerService,
  Customer,
  EmptyCustomer,
  UserSelectors,
  UtilityService,
  ToggleSidebaVisibility,
  Go
} from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  pageHeaderConfig: PageHeaderConfig;
  subject: Subject<any>;
  dataSource: Customer[];
  columns: string[] = ['name', 'company', 'status', 'created', 'balance'];
  handleAddCustomerClick: Function;
  selectedRowId;

  constructor(
    private store$: Store<any>,
    private customerService: CustomerService,
    private utilService: UtilityService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.store$.dispatch(new ToggleSidebaVisibility(true));
    this.handleAddCustomerClick = this._handleAddCustomerClick.bind(this);
    this.pageHeaderConfig = {
      title: 'Customers',
      actions: [
        {
          id: 'njj3rb4bcsw',
          label: 'Add Customer',
          buttonType: ButtonTypes.PRIMARY,
          callback: this.handleAddCustomerClick
        }
      ]
    };
    this.store$.dispatch(new HeaderConfigInit(this.pageHeaderConfig));
    this.store$.dispatch(
      new GetCustomers(Number(sessionStorage.getItem('access_token')))
    );
    this.listen();
  }

  ngOnDestroy() {
    UtilityService.endStream(this.subject);
  }

  isActionsVisible(customer: Customer) {
    return customer.customer_id === this.selectedRowId;
  }

  handleEditCustomer(id: string): void {
    this.store$.dispatch(
      new Go({
        path: ['global/customer-details'],
        query: {
          customer_id: id
        }
      })
    );
  }

  handleRowMouseenter(row: Customer) {
    this.selectedRowId = row.customer_id;
  }

  handleRowMouseleave() {
    this.selectedRowId = null;
  }

  _handleAddCustomerClick() {
    this.store$.dispatch(
      new Go({
        path: ['global/customer-details']
      })
    );
  }

  listen() {
    this.subscribeHeaderActionClick();
    this.subscribeCustomersList();
  }

  subscribeHeaderActionClick() {
    this.store$
      .pipe(
        select(pageHeaderSelectors.selectHeaderActionIndex),
        takeUntil(this.subject)
      )
      .subscribe(id => {
        if (this.pageHeaderConfig && this.pageHeaderConfig.actions) {
          const action = this.pageHeaderConfig.actions.find(x => x.id === id);
          if (action && action.callback) {
            action.callback();
            this.store$.dispatch(new HeaderActionClicked(null));
          }
        }
      });
  }

  subscribeCustomersList() {
    this.store$
      .pipe(select(CustomerSelectors.selectCustomers), takeUntil(this.subject))
      .subscribe(customers => {
        if (customers && customers.length) {
          this.dataSource = this.utilService.copy(customers);
        }
      });
  }
}
