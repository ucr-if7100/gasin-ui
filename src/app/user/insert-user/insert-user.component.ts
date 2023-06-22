import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/domain/user/user';
import { UserService } from 'src/app/services/user-service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  dataUser:User={
     id:0,
      email:'',
      name:'',
      lastname:'',
      username:'', 
  }
  
  constructor(private fb: FormBuilder,private rest:UserService) {
   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required]
    });
  }


  add() {

    if (!this.userForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
      });
      return;
    }
    this.dataUser=this.userForm.value;

    return this.rest.add(this.dataUser).subscribe((result) => {

      this.userForm = this.fb.group({
        email: [''],
        name: [''],
        lastname: [''],
        username: ['']
      });
      Swal.fire(
        'Buen trabajo!',
        'Usuario añadido con éxito!',
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

}
