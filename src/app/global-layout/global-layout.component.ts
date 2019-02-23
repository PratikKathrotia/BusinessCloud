import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarRailService, UtilService } from '@angular-eBooks/sys-utils';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'eb-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss'],
  providers: [ UtilService ]
})
export class GlobalLayoutComponent implements OnInit, OnDestroy {
  showLoading: boolean;
  subject = new Subject<any>();
  showRail: boolean;
  demoForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private railService: SidebarRailService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.railService.openSiderail$.pipe(takeUntil(this.subject))
      .subscribe(bool => this.showRail = bool);
    this.utilService.showLoadingIndicator$.pipe(takeUntil(this.subject))
      .subscribe(bool => this.showLoading = bool);
  }

  ngOnInit() {
    const currentUrl = this.router.routerState.snapshot.url;
    if (currentUrl !== '/global') {
      this.router.navigate([this.router.routerState.snapshot.url]);
    } else {
      this.router.navigate(['/global/home']);
    }
  }

  ngOnDestroy() {
    this.subject.next();
    this.subject.complete();
  }

}
