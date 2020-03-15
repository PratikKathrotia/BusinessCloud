import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthSelectors, Go } from '@angular-cm/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'cm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  subject: Subject<any>;
  isLoggedIn: boolean;

  constructor(private store$: Store<any>) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.isLoggedIn = true;
    this.listen();
  }

  get isGlobalScope(): boolean {
    return this.isLoggedIn;
  }

  handleLogoutClick(): void {
    this.store$.dispatch(
      new Go({
        path: ['auth/login']
      })
    );
  }

  listen(): void {
    this.store$
      .pipe(select(AuthSelectors.selectAuthStatus), takeUntil(this.subject))
      .subscribe(state => {
        this.isLoggedIn = state.login;
      });
  }
}
