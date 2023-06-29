import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/app/domain/account/account';
import { HttpHeaders,HttpResponse  } from '@angular/common/http';
import { UpdateBankAccountDTO } from 'src/app/domain/UpdateBankAccountDTO/UpdateBankAccountDTO';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/transactions/bank_account/';

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

  updateAccount(id:string ,account: UpdateBankAccountDTO): Observable<void> {
    console.log(id);
    console.log(account);
    return this.http.put<void>(`${this.apiUrl}update/${id}`,account);
  }

  updateAccountState(id: string, state: boolean): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}update_status/${id}`, {active : state});
  }

  deleteAccount(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`);
  }

}
