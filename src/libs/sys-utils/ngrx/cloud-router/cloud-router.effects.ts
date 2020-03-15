import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionsSubject } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';

import { UtilityService } from '../../services/utility.service';
import { RouterActionTypes, Go, Change } from './cloud-router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  routerGo$ = this.actions$.pipe(
    ofType(RouterActionTypes.ROUTER_GO),
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      return this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.ROUTER_BACK),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.ROUTER_FORWARD),
    tap(() => this.location.forward())
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private subject: ActionsSubject,
    private utilService: UtilityService
  ) {
    this.listenToRouter();
  }

  listenToRouter() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        const queryParams = { ...event.snapshot.queryParams };
        this.subject.next(
          new Change({
            params: this.utilService.copy(event.snapshot.params),
            query: queryParams,
            path: [event.snapshot.routeConfig.path]
          })
        );
      });
  }
}
