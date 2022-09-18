import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

const routes: Routes = [
  {
    path: '', component: DoctorListComponent,
    data: { title: 'Doctors' }
  },
  {
    path: ':id', component: DoctorDetailsComponent,
    data: { title: 'Doctor Details' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
