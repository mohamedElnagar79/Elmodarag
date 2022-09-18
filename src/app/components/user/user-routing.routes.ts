import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: SigninComponent,
    data: { title: 'Sign In' }
  },
  {
    path: 'signIn', component: SigninComponent,
    data: {title: 'Sign In'}
  },
  {
    path: 'signUp', component: SignupComponent,
    data: {title: 'Sign Up'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
