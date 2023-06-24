import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/app/domain/account/account';

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

  updateAccount(account: Account): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}update`, account);
  }

  updateAccountState(id: string, state: boolean): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}update_status/${id}`, {active : state});
  }

  deleteAccount(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`);
  }

}
