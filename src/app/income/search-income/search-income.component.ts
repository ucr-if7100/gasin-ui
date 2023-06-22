import {  Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from 'src/app/services/user-service/user.service';
@Component({
  selector: 'app-search-income',
  templateUrl: './search-income.component.html',
  styleUrls: ['./search-income.component.css']
})
export class SearchIncomeComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor(
    public rest: UserService,
  ) {}
  dataSource = new MatTableDataSource();


  displayedColumns: string[] = [
   'date',
   'description',
    'amount',
    'action',
  ];

  ngOnInit(): void {
    this.get();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get() {
    this.rest.get().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}