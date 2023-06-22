import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent {

  RegisterAcccountForm: FormGroup = new FormGroup({});



  constructor(private fb: FormBuilder) {//falta rest

   }

  ngOnInit(): void {


    this.RegisterAcccountForm = this.fb.group({

      mail: ['', Validators.required],


    });




  }




  register() {

    if (!this.RegisterAcccountForm.valid) {
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



    console.log(this.RegisterAcccountForm.value)

   /* return this.rest.add(this.RegisterAcccountForm).subscribe((result) => {

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
    });*/
  }

}
