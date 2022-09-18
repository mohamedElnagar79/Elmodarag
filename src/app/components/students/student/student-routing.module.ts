import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TasksComponent } from './tasks/tasks.component';
import { SheetsComponent } from './sheets/sheets.component';
import { ExamsComponent } from './exams/exams.component';
import { GroupsComponent } from './groups/groups.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '', component: StudentComponent,
    data: { title: 'Student' },
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'sheets',
        component: SheetsComponent,
      },
      {
        path: 'exams',
        component: ExamsComponent,
      },
      {
        path: 'group',
        component: GroupsComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
