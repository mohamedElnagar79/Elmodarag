import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TasksComponent } from './tasks/tasks.component';
import { SheetsComponent } from './sheets/sheets.component';
import { ExamsComponent } from './exams/exams.component';
import { GroupsComponent } from './groups/groups.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    StudentComponent,
    SideBarComponent,
    ProfileComponent,
    RegistrationComponent,
    TasksComponent,
    SheetsComponent,
    ExamsComponent,
    GroupsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
