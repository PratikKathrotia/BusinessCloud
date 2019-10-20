import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserInfo } from '../ngrx/user';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private store$: Store<any>
  ) { }

  init(): Promise<any> {

    console.log(`AppInitService.init() called`);

    const user = sessionStorage.getItem('userToken');

    return new Promise<void>((resolve, reject) => {

      if (user) {
        this.store$.dispatch(new GetUserInfo(user));
        setTimeout(() => {
          console.log('AppInitService Finished');
          resolve();
        }, 4000);
      } else {
        resolve();
      }

    });
  }
}
