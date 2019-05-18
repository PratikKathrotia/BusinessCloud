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
  toolbarScope: ToolbarScope;

  constructor(private store$: Store<any>) { }

  get showGreetings() {
    return this.toolbarScope && this.toolbarScope === ToolbarScope.GLOBAL_LEVEL;
  }

  ngOnInit() {
    this.subject = new Subject<any>();
    this.store$.pipe(
      select(utilsSelectors.selectToolbarScope),
      filter(scope => scope !== null),
      takeUntil(this.subject)
    ).subscribe(scope => {
      this.toolbarScope = scope;
    });
  }

}
