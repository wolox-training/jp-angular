import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { environment } from 'src/environments/environment';
import { IRenew } from '../models/renew.model';
import { ISession } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  routeUser = 'users/';
  routeLogin = 'sessions';
  constructor(private http: HttpClient) {

  }

  createUser(user:IUser):Observable <any> {
    return this.http.post(`${environment.URL_API}${this.routeUser}`, user);
  }

  login(session: ISession) {
    return this.http.post<IRenew>(`${environment.URL_API}${this.routeUser}${this.routeLogin}`, session);
  }
}
