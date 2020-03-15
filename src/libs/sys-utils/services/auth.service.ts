import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { EnvironmentService } from './environment.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private envService: EnvironmentService,
    private http$: HttpClient
  ) {}

  signUpNewUser(email: string, password: string): Observable<any> {
    return of([]);
  }

  loginExistingUser(email: string, password: string): Observable<any> {
    const key = btoa(`${email};${password}`);
    let params = new HttpParams();
    params = params.append('key', key);
    return this.http$.get(`${this.envService.getAuthUrl()}/getAuthInfo`, {
      params
    });
  }

  logoutCurrentUser() {
    sessionStorage.removeItem('access_token');
    return of(true);
  }
}
