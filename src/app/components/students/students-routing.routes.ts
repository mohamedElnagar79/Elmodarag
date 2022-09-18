import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '', component: StudentListComponent,
    data: { title: 'Student' }
  },
  {
    path: ':id',
    loadChildren: () => import('./student/student.module').then(res => res.StudentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
