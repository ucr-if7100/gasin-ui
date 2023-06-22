import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user/user';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  @Input() user!: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserProfile();
  }
    idU='f805e809-38d3-4268-8524-d2209a3bd6a7'
  getUserProfile() {
    //let idU = localStorage.getItem('idUsuario');

    // Llama al servicio de usuario para obtener el perfil del usuario
    this.userService.getById(this.idU).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  saveChanges(){
    console.log(this.user)
    this.userService.update(this.idU,this.user).subscribe((result) => {
      Swal.fire(
        'Buen trabajo!',
        'Usuario editado con éxito!',
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
