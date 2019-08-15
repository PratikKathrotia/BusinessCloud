import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToolbarScope, utilsSelectors } from '@angular-cm/sys-utils';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'cm-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  subject: Subject<any>;
  globalScope: boolean;

  constructor(private store$: Store<any>) { }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.globalScope = false;
    this.store$.pipe(
      select(utilsSelectors.selectToolbarScope),
      filter(scope => scope !== null),
      takeUntil(this.subject)
    ).subscribe(scope => {
      this.globalScope = (scope === ToolbarScope.GLOBAL_LEVEL);
    });
  }

  get isGlobalScope(): boolean {
    return this.globalScope;
  }

  handleProfileClick(): void {

  }

}
