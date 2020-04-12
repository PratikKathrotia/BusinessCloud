export interface ComboboxSettings {
  singleSelect?: boolean;
  valueField?: string;
  labelField?: string;
  disabledField?: string;
  enableSelectAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  clearSearchFilter?: boolean;
  maxHeight?: number;
  itemsShowLimit?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
}

export const DefaultSettings: ComboboxSettings = {
  singleSelect: true,
  valueField: 'id',
  labelField: 'text',
  disabledField: 'isDisabled',
  enableSelectAll: true,
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  allowSearchFilter: false,
  clearSearchFilter: true,
  maxHeight: 197,
  itemsShowLimit: 999999999999,
  searchPlaceholderText: 'Search',
  noDataAvailablePlaceholderText: 'No data available',
  closeDropDownOnSelection: false,
  showSelectedItemsAtTop: false,
  defaultOpen: false,
  allowRemoteDataSearch: false
};

export class ListItem {
  value: string | number;
  label: string | number;
  isDisabled?: boolean;

  constructor(public source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.value = this.label = source;
      this.isDisabled = false;
    } else {
      this.value = source.value;
      this.label = source.label;
      this.isDisabled = source.isDisabled;
    }
  }
}
