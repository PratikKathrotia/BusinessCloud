import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  signUpNewUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      email, password
    );
  }

  loginCurrentUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(
      email, password
    );
  }

  logoutCurrentUser() {
    return this.afAuth.auth.signOut();
  }
}
