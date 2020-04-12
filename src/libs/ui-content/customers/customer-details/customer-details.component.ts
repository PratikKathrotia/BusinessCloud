import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store, select } from '@ngrx/store';
import {
  CustomerSelectors,
  Customer,
  EmptyCustomer,
  SelectQueryParams,
  SidebarItem,
  GetCustomer,
  UtilityService
} from '@angular-cm/sys-utils';
import { CustomerForm } from '@angular-cm/ui-formly';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  subject: Subject<any>;
  form: FormGroup;
  formFields: FormlyFieldConfig[];
  navItems: SidebarItem[] = [
    {
      id: 'tab_general',
      label: 'General',
      isActive: true
    },
    {
      id: 'tab_orders',
      label: 'Orders',
      isActive: false
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store$: Store<any>,
    private customerForm: CustomerForm,
    private dialogRef: MatDialogRef<CustomerDetailsComponent>,
    private utilService: UtilityService
  ) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.customer = { ...EmptyCustomer };
    this.customerForm.initializeForm({});
    this.form = new FormGroup(this.customerForm.initFormControls());
    this.formFields = this.customerForm.getForm();
    this.listen();
  }

  contentTitle() {
    return this.navItems.find(x => x.isActive).label;
  }

  handleNavItemClick(id: string): void {
    this.navItems.forEach(item => (item.isActive = !!(item.id === id)));
  }

  handleFormSubmit(): void {
    this.dialogRef.close();
  }

  subscribeCustomerDetails(): void {
    this.store$
      .pipe(select(CustomerSelectors.selectCustomer), takeUntil(this.subject))
      .subscribe(customer => {
        if (customer) {
          this.customer = this.utilService.copy(customer);
        }
      });
  }

  subscribeQueryParams(): void {
    this.store$
      .pipe(
        select(SelectQueryParams),
        takeUntil(this.subject),
        filter(params => !!(params && params.customer_id))
      )
      .subscribe(params => {
        this.store$.dispatch(new GetCustomer(params.customer_id));
      });
  }

  listen(): void {
    this.subscribeCustomerDetails();
    this.subscribeQueryParams();
  }
}
