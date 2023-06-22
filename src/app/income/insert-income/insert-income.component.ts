
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Income } from 'src/app/domain/income/income';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insert-income',
  templateUrl: './insert-income.component.html',
  styleUrls: ['./insert-income.component.css']
})

export class InsertIncomeComponent implements OnInit {

  incomeForm: FormGroup = new FormGroup({});
  date: any;
  hour: any;

  dataIncome:Income={
    description: '',
    amount: 0,
    date: [''],
    type: ['INCOME'],
    idAccount:[1],
    idUser:[1],
    numRefBank:['N/A'],
  }


  constructor(private fb: FormBuilder,private rest:TransactionService) {
   }
  
  ngOnInit(): void {
    
    this.incomeForm = this.fb.group({
      description: ['', [Validators.required]],
      amount: [0, Validators.required],
      date: [''],
      type: ['INCOME'],
      idAccount:[1],
      idUser:[1],
      numRefBank:['N/A'],
      
    });
  }

  add() {
 //  + "T" + this.hour + ':00.000Z'
    var combinedDateTime = this.date ;
    this.incomeForm.patchValue({ date: combinedDateTime });
    console.log(this.incomeForm.value)

    
  
    if (!this.incomeForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal !',
      });
      return;
    }
    this.dataIncome=this.incomeForm.value;

    return this.rest.add(this.dataIncome).subscribe((result) => {

      this.incomeForm = this.fb.group({
        description: ['', [Validators.required, Validators.email]],
        amount: ['', Validators.required],
        date: ['', Validators.required],
        type: ['INCOME', Validators.required],
        idAccount:[1],
        idUser:[1],
        numRefBank:['']
      });
      Swal.fire(
        'Buen trabajo!',
        'Ingreso añadido con éxito!',
        'success'
      )
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
      });
    });
  }

 selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }
  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
}
