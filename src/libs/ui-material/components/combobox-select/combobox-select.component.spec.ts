import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxSelectComponent } from './combobox-select.component';

describe('ComboboxSelectComponent', () => {
  let component: ComboboxSelectComponent;
  let fixture: ComponentFixture<ComboboxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
