import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/domain/user/user';


const Endpoint='http://localhost:8084/api/User';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){
  }

  add(user:User){
    return this.http.post(Endpoint+'/insert',user,httpOptions)
  }

  get():Observable<any>{
    return this.http.get(Endpoint+'/GetUser',httpOptions)
  }

  getById(id:any):Observable<any>{
    return this.http.get(Endpoint+'/GetUser/'+id,httpOptions)
  }

  update(id:any,user:any){
    return this.http.put(Endpoint+'/update/'+id,user,httpOptions)
  }
}