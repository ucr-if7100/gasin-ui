import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailForwardingComponent } from './email-forwarding.component';

describe('EmailForwardingComponent', () => {
  let component: EmailForwardingComponent;
  let fixture: ComponentFixture<EmailForwardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailForwardingComponent]
    });
    fixture = TestBed.createComponent(EmailForwardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
