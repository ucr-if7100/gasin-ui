import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeExpenseComponent } from './see-expense.component';

describe('SeeExpenseComponent', () => {
  let component: SeeExpenseComponent;
  let fixture: ComponentFixture<SeeExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeExpenseComponent]
    });
    fixture = TestBed.createComponent(SeeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
