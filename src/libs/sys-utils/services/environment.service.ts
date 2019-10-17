import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthSelectors, UserSelectors } from '../ngrx';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '../interfaces';
import { UtilityService } from './utility.service';
import { Permissions, UserRoles } from '../enum';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  subject: Subject<any> = new Subject<any>();
  isLoggedIn: boolean = false;
  userPermissions: Permissions[];
  userRole: UserRoles;
  userEntities: {
    account: number;
    userId: string;
  };

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

  configureUserRoles(user: User): UserRoles {
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
    return (this.userEntities && this.userEntities.userId) || null;
  }

  get userAccountId(): number {
    return (this.userEntities && this.userEntities.account) || null;
  }

  hasPermission(permission: Permissions): boolean {
    return this.userPermissions && this.userPermissions.includes(permission);
  }

  hasAllPermissions(permissions: Permissions[]): boolean {
    return this.userPermissions &&
      this.userPermissions.filter(permission => {
        return permissions.includes(permission);
      }).length === permissions.length;
  }

  hasRole(role: UserRoles): boolean {
    return this.userRole && this.userRole === role;
  }

}
