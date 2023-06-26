import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Income } from 'src/app/domain/income/income';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-delete-income',
  templateUrl: './delete-income.component.html',
  styleUrls: ['./delete-income.component.css'],
})
export class DeleteIncomeComponent {
  date: any;
  hour: any;
  data_income: Income = {
    description: '',
    amount: 0,
    date: '',
    type: 'INCOME',
    idCategory: 0,
    idAccount: 1,
    idUser: '38400000-8cf0-11bd-b23e-10b96e4ef00d',
    numRefBank: '',
  };

  id: string = '';

  dataIncome: Income = {
    description: '',
    amount: 0,
    date: '',
    type: 'INCOME',
    idCategory: 0,
    idAccount: 1,
    idUser: '1',
    numRefBank: '',
  };

  incomeForm: FormGroup = new FormGroup({});

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
      this.data_income = data;
      this.incomeForm.patchValue({
        description: this.data_income.description,
      });

      this.incomeForm.patchValue({
        amount: this.data_income.amount,
      });

      this.incomeForm.patchValue({
        date: this.data_income.date,
      });
    });
  }
  tuFormulario = new FormGroup({
    referencia: new FormControl(),
    selectedOption: new FormControl(),
  });

  deleteIncome() {
    if (!this.incomeForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan datos!',
      });
      return;
    }

    console.log(this.incomeForm.value);

    this.dataIncome = this.incomeForm.value;

    console.log(this.dataIncome);

    return this.restTransaction.delete(this.id).subscribe(
      (result) => {
        this.incomeForm = this.fb.group({
          description: ['', Validators.required],
          amount: [0, Validators.required],
          date: ['', Validators.required],
          type: ['INCOME', Validators.required],
          idCategory: [, Validators.required],
          idAccount: [1],
          idUser: ['38400000-8cf0-11bd-b23e-10b96e4ef00d'],
          numRefBank: [''],
        });
        Swal.fire('Buen trabajo!', 'Ingreso eliminado con éxito!', 'success');
        this.router.navigate(['/searchIncome']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!',
        });
      }
    );
  }

  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }
  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
  cancel() {
    this.router.navigate(['/searchIncome']);
  }
}
