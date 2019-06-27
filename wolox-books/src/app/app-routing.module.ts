import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthComponent } from './screens/auth/auth.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'sign-up',
    component : RegisterComponent
  },
  {
    path : 'auth',
    component : AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
