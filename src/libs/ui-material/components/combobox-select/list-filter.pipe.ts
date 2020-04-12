import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './combobox-select.bo';

@Pipe({
  name: 'comboboxFilter',
  pure: false
})
export class ListFilterPipe implements PipeTransform {
  transform(items: ListItem[], filter: ListItem): ListItem[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: ListItem) => this.applyFilter(item, filter));
  }

  applyFilter(item: ListItem, filter: ListItem): boolean {
    if (typeof item.label === 'string' && typeof filter.label === 'string') {
      return !(
        filter.label &&
        item.label &&
        item.label.toLowerCase().indexOf(filter.label.toLowerCase()) === -1
      );
    } else {
      return !(
        filter.label &&
        item.label &&
        item.label
          .toString()
          .toLowerCase()
          .indexOf(filter.label.toString().toLowerCase()) === -1
      );
    }
  }
}
