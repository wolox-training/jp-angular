import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  readonly URL_API = 'https://wbooks-api-stage.herokuapp.com/api/v1/';
  routeBook = 'books';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book>(this.URL_API + this.routeBook, {});
  }

  getBookDetail(id: string) {
    return this.http.get<Book>(`${this.URL_API}${this.routeBook}/${id}`);
  }
}
