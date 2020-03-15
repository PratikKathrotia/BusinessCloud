import { Injectable } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { GetEnvInfo, GetEnvInfoSuccess, GetEnvInfoError } from '../ngrx/auth';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(private subject$: ActionsSubject) {}

  init(): Promise<any> {
    console.log(`AppInitService.init() called`);

    const userId = sessionStorage.getItem('access_token');

    return new Promise<void>((resolve, reject) => {
      if (userId) {
        this.subject$
          .pipe(
            filter(
              (action: any) =>
                action instanceof GetEnvInfoSuccess ||
                action instanceof GetEnvInfoError
            )
          )
          .subscribe(action => {
            resolve();
          });
        this.subject$.next(new GetEnvInfo({ user: Number(userId) }));
      } else {
        resolve();
      }
    });
  }
}
