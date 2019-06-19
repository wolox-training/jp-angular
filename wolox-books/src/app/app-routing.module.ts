import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/unauth/login/login.component';
import { RegisterComponent } from './screens/unauth/register/register.component';
import { AuthComponent } from './screens/auth/auth.component';
import { BooklistComponent } from './screens/auth/booklist/booklist.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { UnauthGuardGuard } from './guard/unauth-guard.guard';
import { BookdetailComponent } from './screens/auth/bookdetail/bookdetail.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    canActivate : [UnauthGuardGuard]
  },
  {
    path : 'login',
    component : LoginComponent,
    canActivate : [UnauthGuardGuard]
  },
  {
    path : 'sign-up',
    component : RegisterComponent,
    canActivate : [UnauthGuardGuard]
  },
  {
    path : 'books',
    component : AuthComponent,
    canActivate : [AuthGuardGuard],
    children: [{
      path : '',
      component : BooklistComponent
    },
    {
      path : ':id',
      component : BookdetailComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
