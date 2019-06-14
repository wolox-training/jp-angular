import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//import {  } from '../models/book.model';
// colocar el modelo arriba

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly URL_API = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  response: Observable<any>;
  constructor(private http: HttpClient) {

  }

  getPost(){
    this.response = this.http.get(this.URL_API);
  }

  createUser(user:Iuser){
    this.response = this.http.post(this.URL_API + '', user)
    .subscribe(response => {
      console.log(response.status);
    });
    
    console.log(this.response);
  }
}
