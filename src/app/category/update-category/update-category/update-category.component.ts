import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/domain/category/category';
import { CategoryService } from 'src/app/services/category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  CategoryForm: FormGroup = new FormGroup({});
  dataCategory: Category = {};
  id: string = "";

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rest: CategoryService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    });
  }

  ngOnInit(): void {
    this.CategoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      id_user: [1]
    });

    this.get();

  }



  get() {

    this.rest.getId(parseInt( this.id,10)).subscribe(data => {

      this.dataCategory=data
      console.log(this.dataCategory)

      //pasarle los datos al formulario
      this.CategoryForm.patchValue({
        name: this.dataCategory.name
      });

      this.CategoryForm.patchValue({
        description: this.dataCategory.description
      });


    })
  }



  update() {
    if (!this.CategoryForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }

    this.dataCategory = this.CategoryForm.value;

    return this.rest.update(parseInt( this.id,10),this.dataCategory).subscribe((result) => {
      Swal.fire(
        'Good job!',
        'Categoria añadida con éxito!',
        'success'
      );
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
