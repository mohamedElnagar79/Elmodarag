import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DoctorDetailsComponent, DoctorListComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
  SharedModule  ]
})
export class DoctorModule { }
