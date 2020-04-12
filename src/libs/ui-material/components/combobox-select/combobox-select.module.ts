import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { ComboboxSelectComponent } from './combobox-select.component';
import { ListFilterPipe } from './list-filter.pipe';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule],
  declarations: [ComboboxSelectComponent, ClickOutsideDirective, ListFilterPipe],
  providers: [ListFilterPipe],
  exports: [ComboboxSelectComponent]
})
export class ComboboxSelectModule {}
