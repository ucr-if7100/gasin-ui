import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-search-expense',
  templateUrl: './search-expense.component.html',
  styleUrls: ['./search-expense.component.css']
})
export class SearchExpenseComponent {

  @ViewChild(MatPaginator) paginator: any = MatPaginator;


  dataSource = new MatTableDataSource();



  displayedColumns: string[] = [
    'amount',
    'description',
    'action'

  ];

  constructor(private service:TransactionService) {


  }


  ngOnInit(): void {
    this.get();
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get() {
    this.service.getExpense("38400000-8cf0-11bd-b23e-10b96e4ef00d").subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
