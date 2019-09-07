import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserInfo } from '@angular-cm/sys-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store$: Store<any>
  ) {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      // this.store$.dispatch(new GetUserInfo(userToken));
    }
  }

  ngOnInit() { }
}
