import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIncomeComponent } from './search-income.component';

describe('SearchIncomeComponent', () => {
  let component: SearchIncomeComponent;
  let fixture: ComponentFixture<SearchIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchIncomeComponent]
    });
    fixture = TestBed.createComponent(SearchIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
