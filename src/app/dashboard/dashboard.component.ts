import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  accounts: Account[]; // Definir el tipo de dato adecuado para las cuentas bancarias
  transactions: Transaction[]; // Definir el tipo de dato adecuado para las transacciones

  displayedColumns: string[] = ['Fecha','Descripción', 'Monto'];
  dataSource: MatTableDataSource<Transaction>;

  constructor(private router: Router) {
    

    // Cargar los datos de las cuentas bancarias y las transacciones desde tu backend o fuente de datos
    this.accounts = [
      { name: 'Cuenta 1', balance: 1000 },
      { name: 'Cuenta 2', balance: 2000 },
      { name: 'Cuenta 3', balance: 500 }
    ];

    this.transactions = [
      { date: new Date(), description: 'Compra', amount: -50 },
      { date: new Date(), description: 'Depósito', amount: 100 },
      { date: new Date(), description: 'Transferencia', amount: -200 },
      { date: new Date(), description: 'Ingreso', amount: 500 }
    ];

    this.dataSource = new MatTableDataSource(this.transactions);
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

  addAccount() {
    // Lógica para agregar una nueva cuenta bancaria
  }
}

interface Account {
  name: string;
  balance: number;
}

interface Transaction {
  date: Date;
  description: string;
  amount: number;
}
