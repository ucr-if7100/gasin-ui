import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { InsertCategoryComponent } from './insert-category/insert-category.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchCategoryComponent } from './search-category/search-category/search-category.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { MatStepperModule } from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { UpdateCategoryComponent } from './update-category/update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category/delete-category.component';


@NgModule({
  declarations: [
    InsertCategoryComponent,
    SearchCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule ,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule

  ],
  exports: [CategoryRoutingModule]
})
export class CategoryModule { }
