import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  AuthSelectors
} from '@angular-cm/sys-utils';
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

  constructor(
    private store$: Store<any>,
    private router: Router
  ) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.isLoggedIn = true;
    this.listen();
  }

  get isGlobalScope(): boolean {
    return this.isLoggedIn;
  }

  handleLogoutClick(): void {
    this.router.navigate(['auth/login']);
  }

  listen(): void {
    this.store$.pipe(
      select(AuthSelectors.selectLoginStatus),
      takeUntil(this.subject)
    ).subscribe(scope => {
      this.isLoggedIn = scope;
    });
  }

}
