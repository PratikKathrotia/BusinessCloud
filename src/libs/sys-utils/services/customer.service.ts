import { Injectable } from '@angular/core';
import { Customer } from '../interfaces';
import { DbCollections } from '../enum';
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
    this.customersCollection = this.afStore.collection(DbCollections.CUSTOMERS);
  }

  // private createSnapShotWithIds(): Observable<Customer[]> {
  //   return this.customersCollection.snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(a => {
  //         const data = a.payload.doc.data() as Customer;
  //         data.id = a.payload.doc.id;
  //         return data;
  //       });
  //     })
  //   );
  // }

  // getCustomers(accountId: number): Observable<Customer[]> {
  //   this.customersCollection = this.afStore.collection(
  //     DbCollections.CUSTOMERS,
  //     ref => ref.where('accountId', '==', accountId)
  //   );
  //   return this.createSnapShotWithIds();
  // }

  getCustomer(customerId: string) {
    return this.customersCollection.doc(customerId).get();
  }

  addCustomer(customer: Customer) {
    customer['id'] = this.utilService.generateAlphaNumericId();
    const copiedCustomer = this.utilService.copy(customer);
    delete copiedCustomer.id;
    return this.customersCollection
      .doc(`${customer.customer_id}`)
      .set(copiedCustomer);
  }

  updateCustomer(customer: Customer) {
    return this.customersCollection
      .doc(`${customer.customer_id}`)
      .set(customer);
  }

  deleteCustomer(customerId: string) {
    return this.customersCollection.doc(`${customerId}`).delete();
  }
}
