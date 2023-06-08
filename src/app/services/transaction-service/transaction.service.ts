import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';


const Endpoint='http://localhost:8085/api/Transaction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient){
  }

  add(user:any){
    return this.http.post(Endpoint+'/insert',user,httpOptions)
  }
}
