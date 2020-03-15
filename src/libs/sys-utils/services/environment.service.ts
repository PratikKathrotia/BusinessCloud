import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthSelectors } from '../ngrx/auth/auth.selectors';
import { UserSelectors } from '../ngrx/user/user.selectors';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User, Environment } from '../interfaces';
import { UtilityService } from './utility.service';
import { Permissions, UserRoles } from '../enum';

const LOCAL_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  subject: Subject<any> = new Subject<any>();
  isLoggedIn: boolean = false;
  userPermissions: Permissions[];
  userRoles: UserRoles[];
  userEntities: {
    account: number;
    userId: number;
  };
  env: Environment = null;

  constructor(private store$: Store<any>, private utilService: UtilityService) {
    this.store$
      .pipe(select(AuthSelectors.selectAuthStatus), takeUntil(this.subject))
      .subscribe(status => {
        if (status.login) {
          this.isLoggedIn = true;
          this.store$
            .pipe(select(AuthSelectors.selectEnvStatus))
            .subscribe((env: Environment) => {
              this.env = this.utilService.copy(env);
              if (this.env) {
                this.userRoles = this.env.roles;
                this.userPermissions = this.env.permissions;
                this.userEntities = {
                  account: this.env.account_id,
                  userId: this.env.user_id
                };
              }
            });
        }
      });
  }

  get isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  get userId(): string {
    return (this.userEntities && this.userEntities.userId.toString()) || null;
  }

  get userAccountId(): number {
    return (this.userEntities && this.userEntities.account) || null;
  }

  hasPermission(permission: Permissions): boolean {
    return this.userPermissions && this.userPermissions.includes(permission);
  }

  hasAllPermissions(permissions: Permissions[]): boolean {
    return (
      this.userPermissions &&
      this.userPermissions.filter(permission => {
        return permissions.includes(permission);
      }).length === permissions.length
    );
  }

  hasRole(role: UserRoles): boolean {
    return this.userRoles && this.userRoles.includes(role);
  }

  get localUrl() {
    return LOCAL_URL;
  }

  getDataUrl() {
    return `${this.localUrl}/data`;
  }

  getAuthUrl() {
    return `${this.localUrl}/auth`;
  }
}
