import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.css']
})
export class SearchMemberComponent {

  @ViewChild(MatPaginator) paginator: any = MatPaginator;


  dataSource = new MatTableDataSource();



  displayedColumns: string[] = [
    'email',

  ];

  constructor(private service:UserService) {

  }


  ngOnInit(): void {
    this.get();
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get() {

    console.log("Hola")
    this.service.getMember("d2eb1f7f-12f8-4fb5-a144-ae1a297d4b21").subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
