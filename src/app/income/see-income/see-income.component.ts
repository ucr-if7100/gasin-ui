import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/domain/expense/expense';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-see-income',
  templateUrl: './see-income.component.html',
  styleUrls: ['./see-income.component.css'],
})
export class SeeIncomeComponent {
  incomeForm: FormGroup = new FormGroup({});
  date: any;
  hour: any;
  id: string = '';

  dataIncome: Expense = {
    description: '',
    amount: 0,
    date: '',
    type: 'GASTO',
    idCategory: 0,
    idAccount: 1,
    idUser: '1',
    numRefBank: '',
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private restTransaction: TransactionService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
      date: ['', Validators.required],
      type: ['INCOME', Validators.required],
      idCategory: [0, Validators.required],
      idAccount: [1],
      idUser: ['38400000-8cf0-11bd-b23e-10b96e4ef00d'],
      numRefBank: [''],
    });

    this.get();
  }

  get() {
    this.restTransaction.getExpenseId(this.id).subscribe((data) => {
      this.dataIncome = data;
      this.incomeForm.patchValue({
        description: this.dataIncome.description,
      });
      this.incomeForm.patchValue({
        amount: this.dataIncome.amount,
      });
      this.incomeForm.patchValue({
        date: this.dataIncome.date,
      });
    
    });
  }
  cancel() {
    this.router.navigate(['/searchIncome']);
  }
}
