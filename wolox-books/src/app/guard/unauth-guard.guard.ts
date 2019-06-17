import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuardGuard implements CanActivate  {

  constructor(private userServive: UserServiceService, private router: Router) {

  }

  canActivate(): boolean {
    if (!this.userServive.isLogged()) {
      return true;
    } else {
      this.router.navigateByUrl('books');
      return false;
    }
  }
}
