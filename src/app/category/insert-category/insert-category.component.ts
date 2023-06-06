import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent {


  CategoryForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private rest:CategoryService) {

   }

  ngOnInit(): void {
    this.CategoryForm = this.fb.group({
      id: 1,
      name: ['', Validators.required],
      description: ['', Validators.required],
      id_User: [1]

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

    return this.rest.add(this.CategoryForm.value).subscribe((result) => {

      this.CategoryForm = this.fb.group({

        description: [''],
        name: [''],

      });
      Swal.fire(
        'Good job!',
        'User added sucessfully!',
        'success'
      )
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
  }

}
