import { Component, OnInit } from '@angular/core';
import { CmFieldType } from '../cm-fieldType/cm-fieldType';

@Component({
  selector: 'cm-checkbox',
  templateUrl: './cm-checkbox.component.html',
  styleUrls: ['./cm-checkbox.component.scss']
})
export class CmCheckboxComponent extends CmFieldType implements OnInit {

  ngOnInit() {
  }

}
