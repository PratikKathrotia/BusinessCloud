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
    private utilService: UtilityService
  ) { }

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
    this.listen();
  }

  ngOnDestroy() {
    UtilityService.endStream(this.subject);
  }

  isActionsVisible(customer: Customer) {
    return customer.id === this.selectedRowId;
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
    this.selectedRowId = row.id;
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
    this.subscribeSelectUser();
    // this.subscribeCustomersList();

    this.dataSource = [{
      ...EmptyCustomer,
      name: 'Pratik Kathrotia',
      company: 'Adobe',
      balance: 123.45,
      created: '08/12/2019'
    }];

  }

  subscribeHeaderActionClick() {
    this.store$.pipe(
      select(pageHeaderSelectors.selectHeaderActionIndex),
      takeUntil(this.subject)
    ).subscribe(id => {
      if (this.pageHeaderConfig && this.pageHeaderConfig.actions) {
        const action = this.pageHeaderConfig.actions.find(x => x.id === id);
        if (action && action.callback) {
          action.callback();
          this.store$.dispatch(new HeaderActionClicked(null));
        }
      }
    });
  }

  subscribeSelectUser() {
    this.store$.pipe(
      select(UserSelectors.selectUser),
      takeUntil(this.subject)
    ).subscribe(user => {
      console.log(user);
      if (user && user.account) {
        // this.store$.dispatch(new GetCustomers(user.account));
      }
    });
  }

  subscribeCustomersList() {
    this.store$.pipe(
      select(CustomerSelectors.selectCustomers),
      takeUntil(this.subject)
    ).subscribe(customers => {
      if (customers && customers.length) {
        this.dataSource = this.utilService.copy(customers);
      }
    });
  }

}
