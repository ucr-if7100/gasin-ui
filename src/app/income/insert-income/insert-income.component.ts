import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Income } from 'src/app/domain/income/income';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-insert-income',
  templateUrl: './insert-income.component.html',
  styleUrls: ['./insert-income.component.css'],
})
export class InsertIncomeComponent implements OnInit {
  date: any;
  hour: any;

  dataIncome: Income = {
    description: '',
    amount: 0,
    date: '',
    type: 'INCOME',
    idCategory: 0,
    idAccount: 1,
    idUser: '38400000-8cf0-11bd-b23e-10b96e4ef00d',
    numRefBank: '',
  };

  incomeForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private rest: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
      date: ['', Validators.required],
      type: ['INCOME', Validators.required],
      idAccount: [1],
      idUser: ['38400000-8cf0-11bd-b23e-10b96e4ef00d'],
      numRefBank: [''],
    });
  }

  add() {
    if (!this.incomeForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan datos!',
      });
      return;
    }
    this.dataIncome = this.incomeForm.value;
    return this.rest.add(this.incomeForm.value).subscribe(
      (result) => {
        this.incomeForm = this.fb.group({
          description: ['', Validators.required],
          amount: [0, Validators.required],
          date: ['', Validators.required],
          type: ['INCOME', Validators.required],
          idAccount: [1],
          idUser: ['38400000-8cf0-11bd-b23e-10b96e4ef00d'],
          numRefBank: [''],
        });
        Swal.fire('Buen trabajo!', 'Ingreso añadido con éxito!', 'success');
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
