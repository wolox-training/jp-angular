import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { ISession } from '../models/session.model';
import { IRenew } from '../models/renew.model';

//import {  } from '../models/book.model';
// colocar el modelo arriba

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly URL_API = 'https://wbooks-api-stage.herokuapp.com/api/v1/';
  routeUser = 'users/';
  routeLogin = 'sessions';
  response: Observable<any>;
  constructor(private http: HttpClient) {

  }

  getPost(){
    this.response = this.http.get(this.URL_API);
  }

  createUser(user:IUser):Observable <any> {
    return this.response = this.http.post(this.URL_API + this.routeUser, user);
  }

  login(session: ISession) {
    return this.http.post<IRenew>(this.URL_API + this.routeUser + this.routeLogin, session);
  }
}
