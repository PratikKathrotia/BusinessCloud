import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';
import { User } from '../interfaces';
import { DbCollections } from '../enum';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  userDocument: AngularFirestoreDocument<User>;
  users: Observable<User[]>;

  constructor(
    private afStore: AngularFirestore,
    private utilService: UtilityService
  ) {
    this.userCollection = this.afStore.collection(DbCollections.USERS);
  }

  addUser(user: User) {
    const copiedUser = this.utilService.copy(user);
    delete copiedUser.id;
    return this.userCollection.doc(`${user.id}`).set(copiedUser);
  }

  getUser(userId: string) {
    return this.userCollection.doc(userId).get();
  }


}
