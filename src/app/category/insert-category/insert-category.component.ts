import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/domain/category/category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent {


  CategoryForm: FormGroup = new FormGroup({});

  dataCategory:Category={ }

  constructor(private fb: FormBuilder,private rest:CategoryService,private router: Router) {

   }

  ngOnInit(): void {


    this.CategoryForm = this.fb.group({

      name: ['', Validators.required],
      description: ['', Validators.required],
      id_user: [1]

    });




  }




  add() {

    if (!this.CategoryForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }

        // Obtén los valores del formulario
  //const formValues = this.CategoryForm.value;

// Crea el objeto de categoría usando los valores del formulario
  this.dataCategory =this.CategoryForm.value;

    console.log(this.dataCategory)
    console.log(this.CategoryForm.value)

    return this.rest.add(this.dataCategory).subscribe((result) => {

      this.CategoryForm = this.fb.group({

        description: [''],
        name: [''],

      });
      Swal.fire(
        'Good job!',
        'Categoria añadido con éxito!',
        'success'

      )

      this.router.navigate(['/searchCategory']);

    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

}
