import { Injectable } from '@angular/core';
import { Customer } from '../interfaces';
import { UtilityService } from './utility.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersCollection: AngularFirestoreCollection<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;
  customers: Observable<Customer[]>;

  constructor(
    private afStore: AngularFirestore,
    private utilService: UtilityService
  ) {
    this.customersCollection = this.afStore.collection('customers');
    this.customers = this.customersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Customer;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getCustomers(): Observable<Customer[]> {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    customer.id = this.utilService.generateDatabaseId();
    const copiedCustomer = this.utilService.copy(customer);
    delete copiedCustomer.id;
    this.customersCollection.doc(`${customer.id}`).set(copiedCustomer);
  }
}
