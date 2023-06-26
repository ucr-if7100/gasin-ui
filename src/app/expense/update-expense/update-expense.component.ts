import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Expense } from 'src/app/domain/expense/expense';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent {


  data_category:any
  nombres: string[] = [];
  date: any;
  hour: any;
  data_expense:Expense={
    description: "",
    amount: 0,
    date:"",
    type: 'EXPENSE',
    idCategory:0,
    idAccount:1,
    idUser:"38400000-8cf0-11bd-b23e-10b96e4ef00d",
    numRefBank:''
  }


  id: string = "";

  dataExpense:Expense={
    description: "",
    amount: 0,
    date:"",
    type: 'GASTO',
    idCategory:0,
    idAccount:1,
    idUser:"1",
    numRefBank:''
  }

  expenseForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private restCategory: CategoryService,
    private router: Router,
    private restTransaction: TransactionService,
  )

  {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    });
  }

  ngOnInit(): void {


    this.restCategory.get().subscribe(data => {

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

    this.get();
  }

  get() {


    this.restTransaction.getExpenseId(this.id).subscribe(data => {

      this.data_expense=data
      console.log(this.data_expense)

      //pasarle los datos al formulario
      this.expenseForm.patchValue({
        description: this.data_expense.description
      });

      this.expenseForm.patchValue({
        amount: this.data_expense.amount
      });


      this.expenseForm.patchValue({
        date: this.data_expense.date
      });

      this.expenseForm.patchValue({
        numRefBank: this.data_expense.numRefBank
      });

      this.expenseForm.patchValue({
        idCategory: this.data_expense.idCategory
      });




    })
  }
  tuFormulario = new FormGroup({
    referencia: new FormControl(),
    selectedOption: new FormControl()

  });

  ///////////////

  update() {

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

    return this.restTransaction.update(this.id,this.expenseForm.value).subscribe((result) => {

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


  ///////////////


}
