import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHeader3Component } from './cm-header3.component';

describe('CmHeader3Component', () => {
  let component: CmHeader3Component;
  let fixture: ComponentFixture<CmHeader3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmHeader3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
