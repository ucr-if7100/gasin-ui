import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category-service/category.service';



@Component({
  selector: 'app-insert-expense',
  templateUrl: './insert-expense.component.html',
  styleUrls: ['./insert-expense.component.css']
})


export class InsertExpenseComponent {

  //options: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  data_category:any
  nombres: string[] = [];

  constructor(private service_category:CategoryService) {


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





  }




}
