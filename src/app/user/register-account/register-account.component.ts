import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent {

  RegisterAcccountForm: FormGroup = new FormGroup({});
  router: any;



  constructor(private fb: FormBuilder,private service:UserService) {//falta rest

   }

  ngOnInit(): void {


    this.RegisterAcccountForm = this.fb.group({

      email: ['', Validators.required],
      idAdmin: ['d2eb1f7f-12f8-4fb5-a144-ae1a297d4b21'],
      id: ['']


    });




  }




  register() {

    if (!this.RegisterAcccountForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error formulario',
      });
      return;
    }

        // Obtén los valores del formulario
  //const formValues = this.CategoryForm.value;

// Crea el objeto de categoría usando los valores del formulario



    console.log(this.RegisterAcccountForm.value)

   return this.service.addMember(this.RegisterAcccountForm.value).subscribe((result) => {

      this.RegisterAcccountForm = this.fb.group({

        email: [''],


      });
      Swal.fire(
        'Good job!',
        'Categoria añadido con éxito!',
        'success'

      )

      this.router.navigate(['/searchMember']);

    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al matricular!',
      });
    });
  }

}
