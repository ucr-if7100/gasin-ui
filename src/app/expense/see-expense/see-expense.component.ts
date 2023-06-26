import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/domain/expense/expense';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-see-expense',
  templateUrl: './see-expense.component.html',
  styleUrls: ['./see-expense.component.css']
})
export class SeeExpenseComponent {


  expenseForm: FormGroup = new FormGroup({});



  data_category:any
  nombres: string[] = [];
  date: any;
  hour: any;


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

      this.dataExpense=data
      console.log(this.dataExpense)

      //pasarle los datos al formulario
      this.expenseForm.patchValue({
        description: this.dataExpense.description
      });

      this.expenseForm.patchValue({
        amount: this.dataExpense.amount
      });


      this.expenseForm.patchValue({
        date: this.dataExpense.date
      });

      this.expenseForm.patchValue({
        numRefBank: this.dataExpense.numRefBank
      });

      this.expenseForm.patchValue({
        idCategory: this.dataExpense.idCategory
      });




    })
  }
  tuFormulario = new FormGroup({
    referencia: new FormControl(),
    selectedOption: new FormControl()

  });




}
