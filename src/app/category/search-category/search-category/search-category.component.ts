import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements AfterViewInit {


  @ViewChild(MatPaginator) paginator: any = MatPaginator;


  dataSource = new MatTableDataSource();


  displayedColumns: string[] = [
    'name',
    'capacity',
    'province',
    'city',
    'district',
    'action',
  ];


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getParking() {
    //const cookie: string = this.cookieService.get('token');
    //this.rest.parkingHeredia(cookie).subscribe((data2: any) => {
     // this.dataSource.data = data2;
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
