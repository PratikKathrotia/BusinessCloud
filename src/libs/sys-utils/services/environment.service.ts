import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthSelectors, UserSelectors } from '../ngrx';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '../interfaces';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  subject: Subject<any> = new Subject<any>();
  isLoggedIn: boolean = false;
  permissions: string[];
  userRole: string;

  constructor(
    private store$: Store<any>,
    private utilService: UtilityService
  ) {
    this.store$.pipe(
      select(AuthSelectors.selectLoginStatus),
      takeUntil(this.subject)
    ).subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.isLoggedIn = true;
        this.store$.pipe(
          select(UserSelectors.selectUser)
        ).subscribe(user => {
          if (user as User) {
            this.configureUserRoles(user);
          }
        });
      }
    });
  }

  configureUserRoles(user: User) {
    if (user && user.role) {
      this.userRole = this.utilService.copy(user.role);
    }
  }

  get isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  hasPermission(): boolean {
    return true;
  }

  hasRole(): boolean {
    return true;
  }
}
