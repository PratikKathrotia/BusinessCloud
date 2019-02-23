import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../sys-utils/services/util.service';

@Component({
  selector: 'eb-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  itemsInTheCart: number;
  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.itemsInTheCart = 2;
  }

  change_View(event) {
    this.utilService.sendToggleViewValue(event.checked);
  }

}
