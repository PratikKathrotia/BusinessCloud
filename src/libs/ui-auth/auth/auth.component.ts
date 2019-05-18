import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetToolbarScope, ToolbarScope } from '@angular-cm/sys-utils';

@Component({
  selector: 'cm-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private store$: Store<any>) { }

  ngOnInit() {
    this.store$.dispatch(new SetToolbarScope(ToolbarScope.AUTH_LEVEL));
  }

}
