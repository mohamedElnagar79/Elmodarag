import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './shared/pages/about-us/about-us.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(res => res.HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(res => res.UserModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./components/doctor/doctor.module').then(res => res.DoctorModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./components/students/students.module').then(res => res.StudentsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./components/courses/courses.module').then(res => res.CoursesModule)
  },
  {
    path: 'departments',
    loadChildren: () => import('./components/department/department.module').then(res => res.DepartmentModule)
  },
  {
    path: 'college',
    loadChildren: () => import('./components/college/college.module').then(res => res.CollegeModule)
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { title: 'Contact Us' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { title: 'About Us' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
