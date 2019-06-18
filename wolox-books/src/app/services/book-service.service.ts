import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  readonly URL_API = 'https://wbooks-api-stage.herokuapp.com/api/v1/';
  routeBook = 'booksgenretitleauthordescription';
  constructor(private http: HttpClient) { }
}
