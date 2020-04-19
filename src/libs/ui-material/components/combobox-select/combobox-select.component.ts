import {
  Component,
  Input,
  Output,
  OnInit,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { clone } from 'lodash';

import { ListItem, ComboboxSettings, DefaultSettings } from './combobox-select.bo';
import { ListFilterPipe } from './list-filter.pipe';

@Component({
  selector: 'combobox-select',
  templateUrl: './combobox-select.component.html',
  styleUrls: ['./combobox-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxSelectComponent),
      multi: true
    }
  ]
})
export class ComboboxSelectComponent implements ControlValueAccessor, OnInit {
  private _settings: ComboboxSettings;
  private _data: ListItem[] = [];
  private selectedItems: ListItem[] = [];
  private isDropdownOpen = false;
  private _placeholder = 'Select';
  private _sourceDataType = null;
  private _sourceDataFields: string[] = [];
  private filter: ListItem = new ListItem(this._data);
  private defaultSettings: ComboboxSettings = DefaultSettings;

  @Input() disabled = false;

  @Input()
  public set settings(value: ComboboxSettings) {
    if (!!value) {
      this._settings = clone(value, true);
      return;
    }
    this._settings = clone(this.defaultSettings, true);
  }

  @Input()
  public set data(value: any[]) {
    if (!value) {
      this._data = [];
    } else {
      const firstItem = value[0];
      this._sourceDataType = typeof firstItem;
      this._sourceDataFields =
        this._sourceDataType === 'object' ? Object.keys(firstItem) : [];
      this._data = value.map((item: any) =>
        typeof item === 'string' || typeof item === 'number'
          ? new ListItem(item)
          : new ListItem({
              label: item[this._settings.labelField],
              value: item[this._settings.valueField],
              isDisabled: item[this._settings.disabledField]
            })
      );
    }
  }

  @Input()
  public set placeholder(placeholder) {
    this._placeholder = placeholder;
  }

  public get data() {
    return this._data || [];
  }

  @Output() onFilterChange: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() onDropdownClose: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output() onSelect: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output() onDeSelect: EventEmitter<ListItem> = new EventEmitter<any>();

  @Output() onSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<
    Array<any>
  >();

  @Output() onDeSelectAll: EventEmitter<Array<ListItem>> = new EventEmitter<
    Array<any>
  >();

  private propogateChange = (_: any) => {};
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  onFilterTextChange($event) {
    this.onFilterChange.emit($event);
  }

  constructor(private listFilterPipe: ListFilterPipe) {}

  onItemClick($event: any, item: ListItem) {
    if (this.disabled || item.isDisabled) {
      return false;
    }
    const found = this.isSelected(item);
    if (!found) {
      this.addSelected(item);
    } else {
      this.removeSelected(item);
    }
    if (this._settings.singleSelect && this._settings.closeDropDownOnSelection) {
      this.closeDropdown();
    }
  }

  writeValue(value: any) {
    if (value !== undefined && value !== null && value.length > 0) {
      if (this._settings.singleSelect) {
        try {
          if (value.length >= 1) {
            const firstItem = value[0];
            this.selectedItems = [
              typeof firstItem === 'string' || typeof firstItem === 'number'
                ? new ListItem(firstItem)
                : new ListItem({
                    id: firstItem[this._settings.valueField],
                    text: firstItem[this._settings.labelField],
                    isDisabled: firstItem[this._settings.disabledField]
                  })
            ];
          }
        } catch (e) {
          // console.error(e.body.msg);
        }
      } else {
        const _data = value.map((item: any) =>
          typeof item === 'string' || typeof item === 'number'
            ? new ListItem(item)
            : new ListItem({
                id: item[this._settings.valueField],
                text: item[this._settings.labelField],
                isDisabled: item[this._settings.disabledField]
              })
        );
        this.selectedItems = _data;
      }
    } else {
      this.selectedItems = [];
    }
    this.onChangeCallback(value);
    this.propogateChange(value);
  }

  registerOnChange(fn) {
    this.propogateChange = fn;
  }

  registerOnTouched() {}

  @HostListener('blur')
  public onTouched() {
    this.closeDropdown();
    this.onTouchedCallback();
  }

  trackByFn(index, item) {
    return item.value;
  }

  isSelected(clickedItem: ListItem) {
    let found = false;
    this.selectedItems.forEach(item => {
      if (clickedItem.value === item.value) {
        found = true;
      }
    });
    return found;
  }

  isAllItemsSelected(): boolean {
    const filteredItems = this.listFilterPipe.transform(this._data, this.filter);
    const itemDisabledCount = filteredItems.filter(item => item.isDisabled).length;
    if (!this.data || this.data.length === 0) {
      return false;
    }
    return filteredItems.length === this.selectedItems.length + itemDisabledCount;
  }

  showButton(): boolean {
    return !this._settings.singleSelect;
  }

  itemShowRemaining(): number {
    return this.selectedItems.length - this._settings.itemsShowLimit;
  }

  addSelected(item: ListItem) {
    if (this._settings.singleSelect) {
      this.selectedItems = [];
      this.selectedItems.push(item);
    } else {
      this.selectedItems.push(item);
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.propogateChange(this.emittedValue(this.selectedItems));
    this.onSelect.emit(this.emittedValue(item));
  }

  removeSelected(itemSel: ListItem) {
    this.selectedItems.forEach(item => {
      if (itemSel.value === item.value) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.propogateChange(this.emittedValue(this.selectedItems));
    this.onDeSelect.emit(this.emittedValue(itemSel));
  }

  emittedValue(val: any): any {
    const selected = [];
    if (Array.isArray(val)) {
      val.map(item => {
        selected.push(this.objectify(item));
      });
    } else {
      if (val) {
        return this.objectify(val);
      }
    }
    return selected;
  }

  objectify(val: ListItem) {
    if (this._sourceDataType === 'object') {
      const obj = {};
      obj[this._settings.valueField] = val.value;
      obj[this._settings.labelField] = val.label;
      if (this._sourceDataFields.includes(this._settings.disabledField)) {
        obj[this._settings.disabledField] = val.isDisabled;
      }
      return obj;
    }
    if (this._sourceDataType === 'number') {
      return Number(val.value);
    } else {
      return val.label;
    }
  }

  toggleDropdown(evt) {
    evt.preventDefault();
    if (this.disabled && this._settings.singleSelect) {
      return;
    }
    this._settings.defaultOpen = !this._settings.defaultOpen;
    if (!this._settings.defaultOpen) {
      this.onDropdownClose.emit();
    }
  }

  closeDropdown() {
    this._settings.defaultOpen = false;
    // clear search text
    if (this._settings.clearSearchFilter) {
      this.filter.label = '';
    }
    this.onDropdownClose.emit();
  }

  toggleSelectAll() {
    if (this.disabled) {
      return false;
    }
    console.log('in toggle');
    console.log(this.isAllItemsSelected());
    if (!this.isAllItemsSelected()) {
      // filter out disabled item first before slicing
      this.selectedItems = this.listFilterPipe
        .transform(this._data, this.filter)
        .filter(item => !item.isDisabled)
        .slice();
      this.onSelectAll.emit(this.emittedValue(this.selectedItems));
    } else {
      console.log('unselect');
      this.selectedItems = [];
      this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.propogateChange(this.emittedValue(this.selectedItems));
  }

  getFields(inputData) {
    const fields = [];
    if (typeof inputData !== 'object') {
      return fields;
    }
    // tslint:disable-next-line:forin
    for (const prop in inputData) {
      fields.push(prop);
    }
    return fields;
  }

  ngOnInit() {}
}
