import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BaseAppState, SidebarItemsLoad } from '@angular-cm/sys-utils';
import { sidebarSelectors } from 'src/libs/sys-utils/ngrx/sidebar/sidebar.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store$: Store<BaseAppState>) {}

  ngOnInit() {
    this.store$.dispatch(new SidebarItemsLoad(''));
    this.store$.pipe(
      select(sidebarSelectors.selectSidebarItems)
    ).subscribe(state => {
      console.log(state);
    });
  }
}
