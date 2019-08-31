import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  HeaderConfigInit,
  PageHeaderConfig,
  ButtonTypes,
  pageHeaderSelectors,
  HeaderActionClicked,
  FullScreenDialogConfig,
  CustomerService,
  Customer,
  UserSelectors,
  UtilityService,
  EnvironmentService,
  ToggleSidebaVisibility,
  selectQueryParams
} from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';

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
    private dialog: MatDialog,
    private envService: EnvironmentService,
    private customerService: CustomerService,
    private router: Router,
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

  }

  handleCustomerDetail(id: string): void {
    this.router.navigate(['global/customer-details', id]);
  }

  handleRowMouseenter(row: Customer) {
    this.selectedRowId = row.id;
  }

  handleRowMouseleave() {
    this.selectedRowId = null;
  }

  _handleAddCustomerClick() {

  }

  listen() {
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

    // this.customerService.getCustomers().pipe(
    //   takeUntil(this.subject)
    // ).subscribe(customers => {
    //   this.dataSource = this.utilService.copy(customers);
    // });
  }

}