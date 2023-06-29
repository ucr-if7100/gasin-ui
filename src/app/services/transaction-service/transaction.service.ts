import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Income } from 'src/app/domain/income/income';


const Endpoint='http://localhost:8081/transactions/Transaction';

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

  add(user:Income){
    return this.http.post(Endpoint+'/insert',user,httpOptions)
  }


  getExpense(id_user:String){
    console.log("hola")
    return this.http.get(Endpoint+'/getExpense/'+id_user,httpOptions)
  }

  getExpenseId(id_expense:String){

    return this.http.get(Endpoint+'/getId/'+id_expense,httpOptions)
  }

  update(id:any,data:Income){
    console.log("update")
    return this.http.put(Endpoint+'/update/'+id,data,httpOptions)
  }

  get(id:any){
    return this.http.get(Endpoint+'/getIncome/'+id,httpOptions)
  }


  delete(id:any){
    return this.http.delete(Endpoint+'/delete/'+id,httpOptions)
  }





}

