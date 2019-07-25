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

}
