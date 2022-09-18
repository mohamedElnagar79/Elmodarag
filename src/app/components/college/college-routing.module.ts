import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  {
    path: '',
    component: CollegeComponent,
    data: { title: 'College' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeRoutingModule { }
