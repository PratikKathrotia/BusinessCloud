import { Component, OnInit, Input } from '@angular/core';
import {
  AlertConfig,
  VariantTypes
} from '@angular-cm/sys-utils';

@Component({
  selector: 'cm-alert',
  templateUrl: './cm-alert.component.html',
  styleUrls: ['./cm-alert.component.scss']
})
export class CmAlertComponent implements OnInit {

  @Input() alertConfig: AlertConfig;

  constructor() { }

  ngOnInit() {
  }

  get message(): string {
    if (this.alertConfig) {
      return this.alertConfig.message;
    }
    return '';
  }

  get icon(): string {
    if (this.alertConfig) {
      return this.isSuccess ? 'check_circle_outline' : 'info_outline';
    }
  }

  get isSuccess(): boolean {
    if (this.alertConfig) {
      return this.alertConfig.variant === VariantTypes.SUCCESS;
    }
  }

  get isWarning(): boolean {
    if (this.alertConfig) {
      return this.alertConfig.variant === VariantTypes.WARNING;
    }
  }

  get isError(): boolean {
    if (this.alertConfig) {
      return this.alertConfig.variant === VariantTypes.ERROR;
    }
  }

}
