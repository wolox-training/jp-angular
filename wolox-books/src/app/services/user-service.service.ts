import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { environment } from 'src/environments/environment';

//import {  } from '../models/book.model';
// colocar el modelo arriba

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  routeUser = 'users';
  constructor(private http: HttpClient) {

  }

  createUser(user:IUser):Observable <any> {
    return this.http.post(`${environment.URL_API}${this.routeUser}`, user);
  }
}
