import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExpenseComponent } from './search-expense.component';

describe('SearchExpenseComponent', () => {
  let component: SearchExpenseComponent;
  let fixture: ComponentFixture<SearchExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchExpenseComponent]
    });
    fixture = TestBed.createComponent(SearchExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
