import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmPopoverComponent } from './cm-popover.component';

describe('CmPopoverComponent', () => {
  let component: CmPopoverComponent;
  let fixture: ComponentFixture<CmPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
