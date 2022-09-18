import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ]
})
export class DepartmentModule { }
