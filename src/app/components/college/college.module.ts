import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { CollegeComponent } from './college/college.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CollegeComponent
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule,
    SharedModule
  ]
})
export class CollegeModule { }
