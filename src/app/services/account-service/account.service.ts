import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/app/domain/account/account';
import { HttpHeaders,HttpResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:8085/bank_account/';

  constructor(private http: HttpClient) {}

  getAccounts(userID: string): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}user/${userID}`);
  }

  saveAccount(account: Account): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}save`, account);
  }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}accountNumber/${id}`);
  }

  updateAccount(id:string ,account: any): Observable<HttpResponse<void>> {
    console.log(id);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(JSON.stringify(account));
    return this.http.put<void>(`${this.apiUrl}update/${id}`,JSON.stringify(account),{ headers, observe: 'response' });
  }

  updateAccountState(id: string, state: boolean): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}update_status/${id}`, {active : state});
  }

  deleteAccount(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`);
  }

}
