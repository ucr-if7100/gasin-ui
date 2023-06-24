import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from 'src/app/domain/account/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8085/bank_account/';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
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

  deleteAccount(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}delete/${id}`);
  }

  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError('Ocurrió un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
  }
}
