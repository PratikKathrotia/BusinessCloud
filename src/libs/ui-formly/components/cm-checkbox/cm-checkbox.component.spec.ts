import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmCheckboxComponent } from './cm-checkbox.component';

describe('CmCheckboxComponent', () => {
  let component: CmCheckboxComponent;
  let fixture: ComponentFixture<CmCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
