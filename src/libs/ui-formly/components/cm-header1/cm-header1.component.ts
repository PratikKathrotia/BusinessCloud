import { Component, OnInit } from '@angular/core';
import { CmFieldType } from '../cm-fieldType/cm-fieldType';

@Component({
  selector: 'cm-header1',
  templateUrl: './cm-header1.component.html',
  styleUrls: ['./cm-header1.component.scss']
})
export class CmHeader1Component extends CmFieldType implements OnInit {

  ngOnInit() {
  }

}
