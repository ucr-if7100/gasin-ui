import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit {

  constructor(public rest:UserService,private route:ActivatedRoute) { }
  @Input()userDataUpdate:any;
  ngOnInit(): void {
    this.rut();
  }

rut(){
  
  this.rest.getById(this.route.snapshot.params['id_User']).subscribe((data: {}) => {
    this.userDataUpdate = data;
  });
}
/*
update(){

  this.rest.updateUser(this.userDataUpdate,).subscribe((result) => {
    this.userDataUpdate={
      id_User:0,identification:'',name:'',last_Name:'',tel_number:'',email:'',password:'',role:{idRole:0 }
    }
    Swal.fire(
      'Good job!',
      'User sucessfully updated!',
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
*/
}
