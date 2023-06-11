
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';


const Endpoint='http://localhost:8085/api/Category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient){
  }

  add(category:any){
    return this.http.post(Endpoint+'/insert',category,httpOptions)
  }

  get(){
    return this.http.get(Endpoint+'/get',httpOptions)
  }

}






