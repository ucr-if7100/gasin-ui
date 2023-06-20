import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/user/user';
import { UserService } from 'src/app/services/user-service/user.service';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    // Llama al servicio de usuario para obtener el perfil del usuario
    this.userService.getById('f805e809-38d3-4268-8524-d2209a3bd6a7').subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }
}
