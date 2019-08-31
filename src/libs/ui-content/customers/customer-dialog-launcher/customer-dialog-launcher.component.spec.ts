import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDialogLauncherComponent } from './customer-dialog-launcher.component';

describe('CustomerDialogLauncherComponent', () => {
  let component: CustomerDialogLauncherComponent;
  let fixture: ComponentFixture<CustomerDialogLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDialogLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDialogLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
