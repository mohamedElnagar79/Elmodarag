import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  {
    path: '', component: CoursesListComponent,
    data: { title: 'Courses' }
  },
  {
    path: ':id', component: CourseDetailsComponent,
    data: { title: 'Course Details' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
