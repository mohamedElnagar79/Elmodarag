import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
