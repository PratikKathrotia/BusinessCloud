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
  userPermissions: string[];
  userRole: string;
  userEntities: any;

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
        ).subscribe((user: User) => {
          if (user) {
            this.userRole = this.configureUserRoles(user);
            this.userEntities = this.configureUserEntities(user);
          }
        });
      }
    });
  }

  configureUserRoles(user: User): string {
    if (user && user.role) {
      return this.utilService.copy(user.role);
    }
  }

  configureUserEntities(user: User) {
    const entityObj = {
      account: this.utilService.copy(user.account),
      userId: this.utilService.copy(user.id)
    };
    return entityObj;
  }

  get isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  get userId(): string {
    if (this.userEntities && this.userEntities.userId) {
      return this.userEntities.userId;
    }
    return null;
  }

  get userAccountId(): number {
    if (this.userEntities && this.userEntities.account) {
      return this.userEntities.account;
    }
    return null;
  }

  hasPermission(): boolean {
    return true;
  }

  hasRole(role: string): boolean {
    if (this.userRole) {
      return this.userRole === role;
    }
    return false;
  }
}
