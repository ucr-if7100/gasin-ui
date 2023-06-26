import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Expense } from 'src/app/domain/expense/expense';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-insert-expense',
  templateUrl: './insert-expense.component.html',
  styleUrls: ['./insert-expense.component.css']
})


export class InsertExpenseComponent {

  //options: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  data_category:any
  nombres: string[] = [];
  date: any;
  hour: any;

  dataExpense:Expense={
    description: "",
    amount: 0,
    date:"",
    type: 'EXPENSE',
    idCategory:0,
    idAccount:1,
    idUser:"38400000-8cf0-11bd-b23e-10b96e4ef00d",
    numRefBank:''
  }

  expenseForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private rest:TransactionService,private service_category:CategoryService
    ,private router: Router) {

   }



  tuFormulario = new FormGroup({
    referencia: new FormControl(),
    selectedOption: new FormControl()

  });

  ngOnInit(): void {


    this.service_category.get().subscribe(data => {

      this.data_category=data
      console.log(this.data_category)
    })


    this.expenseForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
      date: ['', Validators.required],
      type: ['EXPENSE', Validators.required],
      idCategory:[0, Validators.required],
      idAccount:[1],
      idUser:["38400000-8cf0-11bd-b23e-10b96e4ef00d"],
      numRefBank:['']
    });


  }


//##########

//##########


///////////
add() {

  //+ 'T' + this.hour + ':00.000Z'
  //var combinedDateTime = this.date ;

  console.log(this.expenseForm.value)

  //this.expenseForm.patchValue({ date: combinedDateTime });


  if (!this.expenseForm.valid) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Faltan datos!',
    });
    return;
  }

  console.log(this.expenseForm.value)

  this.dataExpense =this.expenseForm.value;

  console.log(this.dataExpense)

  return this.rest.add(this.expenseForm.value).subscribe((result) => {

    this.expenseForm = this.fb.group({
      description: ['', Validators.required],
      amount: [0, Validators.required],
      date: ['', Validators.required],
      type: ['EXPENSE', Validators.required],
      idCategory:[, Validators.required],
      idAccount:[1],
      idUser:["38400000-8cf0-11bd-b23e-10b96e4ef00d"],
      numRefBank:['']
    });
    Swal.fire(
      'Buen trabajo!',
      'Gasto añadido con éxito!',
      'success'
    )
    this.router.navigate(['/searchExpense']);
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
///////////




  }





