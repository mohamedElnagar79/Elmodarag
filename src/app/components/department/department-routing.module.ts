import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  {
    path: '', component: DepartmentListComponent,
    data: { title: 'Departments' }
  },
  {
    path: ':id', component: DepartmentDetailsComponent,
    data: { title: 'Department Details' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
