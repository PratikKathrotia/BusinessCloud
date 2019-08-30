import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { CmFieldType } from '../cm-fieldType/cm-fieldType';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.scss']
})
export class CmInputComponent extends CmFieldType implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('inputField') inputField;
  private subject: Subject<any>;

  public get defaultValue(): any {
    return this.getTemplateOptionField('defaultValue', '');
  }

  ngOnInit(): void {
    if (!this.model[this.key]) {
      this.formControl.setValue(this.defaultValue);
    }
    this.subject = new Subject<any>();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  ngAfterViewInit(): void {
    if (this.to['debounce'] && !this.to['hidden']) {
      fromEvent(this.inputField.nativeElement, 'keyup')
        .pipe(
          debounceTime(this.to['debounce']),
          distinctUntilChanged(),
          takeUntil(this.subject)
        ).subscribe((event: KeyboardEvent) => {
          this.handleChange(event);
        });
    }
  }

  handleChange(event: KeyboardEvent) {
    if (this.to['handleChange'] instanceof Function) {
      this.to['handleChange']({
        event,
        form: this.form
      });
    }
  }

}
