import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.routes';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { DetailsComponent } from './details/details.component';
import { CollegeComponent } from './college/college.component';
import { ProgramsComponent } from './programs/programs.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    DetailsComponent,
    CollegeComponent,
    ProgramsComponent,
    DoctorsComponent,
    CoursesComponent,
    SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
