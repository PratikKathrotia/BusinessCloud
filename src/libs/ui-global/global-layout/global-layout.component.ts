import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetToolbarScope, ToolbarScope } from '@angular-cm/sys-utils';

@Component({
  selector: 'global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss']
})
export class GlobalLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private store$: Store<any>
  ) { }

  ngOnInit() {
    this.store$.dispatch(new SetToolbarScope(ToolbarScope.GLOBAL_LEVEL));
    const currentUrl = this.router.routerState.snapshot.url;
    if (currentUrl !== '/global') {
      this.router.navigate([this.router.routerState.snapshot.url]);
    } else {
      this.router.navigate(['/global/customers']);
    }
  }

}
