import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIncomeComponent } from './delete-income.component';

describe('DeleteIncomeComponent', () => {
  let component: DeleteIncomeComponent;
  let fixture: ComponentFixture<DeleteIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteIncomeComponent]
    });
    fixture = TestBed.createComponent(DeleteIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
