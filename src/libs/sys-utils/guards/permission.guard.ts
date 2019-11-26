import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { EnvironmentService } from '../services/environment.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(
    private envService: EnvironmentService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const permissions = state.root.children[0].data['permissions'] || [];
    const loggedIn = this.envService.isLoggedIn;

    if (loggedIn && permissions && permissions.length) {
      const hasPermissions = this.envService.hasAllPermissions(permissions);
      if (!hasPermissions) {
        this.router.navigate(['global/unauthorized']);
        return false;
      }
      return true;
    }
    return true;
  }
}
