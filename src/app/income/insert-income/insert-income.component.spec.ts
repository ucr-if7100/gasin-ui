import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertIncomeComponent } from './insert-income.component';

describe('InsertIncomeComponent', () => {
  let component: InsertIncomeComponent;
  let fixture: ComponentFixture<InsertIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertIncomeComponent]
    });
    fixture = TestBed.createComponent(InsertIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
