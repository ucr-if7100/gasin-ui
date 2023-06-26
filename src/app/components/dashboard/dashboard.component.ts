import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/services/account-service/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource!: MatTableDataSource<Account>;
  accounts: Account[] = [];
  oneAccount: Account | null = null;

  userID: string = "11ee12d5-d176-75c3-9a35-a8a1591622fa";


  displayedColumns: string[] = ['Fecha','Descripción', 'Monto'];

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  getAccountCardColor(balance: number): string {
    if (balance >= 2000) {
      return 'green';
    } else if (balance >= 1000) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  viewAllTransactions(): void {
    this.router.navigate(['/transactions']);
  }

  async loadAccounts(): Promise<void> {
    try {
      const accounts = await this.accountService.getAccounts(this.userID).toPromise();
      if (accounts) {
        this.accounts = accounts;
        console.log(this.accounts)
        this.dataSource = new MatTableDataSource<Account>(accounts);
      }
    } catch (error) {
      console.error('Error loading the accounts:', error);
    }
  }


}
