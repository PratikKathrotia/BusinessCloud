import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category, UtilService } from '@angular-eBooks/sys-utils';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'eb-siderail',
  templateUrl: './siderail.component.html',
  styleUrls: ['./siderail.component.scss']
})
export class SiderailComponent implements OnInit, OnDestroy {
  categories: Category[];
  subject: Subject<any>;

  constructor(
    private utilService: UtilService
  ) {}

  ngOnInit() {
    this.subject = new Subject<any>();
    this.utilService.getCategories().pipe(
      takeUntil(this.subject)
    ).subscribe(cat => {
      this.categories = cat as Category[];
      console.log(this.categories);
    });
  }

  ngOnDestroy() {}

}
