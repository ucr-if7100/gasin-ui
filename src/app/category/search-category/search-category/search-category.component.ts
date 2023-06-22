import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from 'src/app/services/category-service/category.service';


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
    'description',
    'action'

  ];

  constructor(private service_category:CategoryService) {

  }


  ngOnInit(): void {
    this.get();
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get() {
    this.service_category.get().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(data)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }





}
