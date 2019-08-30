import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHeader1Component } from './cm-header1.component';

describe('CmHeader1Component', () => {
  let component: CmHeader1Component;
  let fixture: ComponentFixture<CmHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
