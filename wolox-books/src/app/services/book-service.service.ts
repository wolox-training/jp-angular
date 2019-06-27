import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookUrl = 'books';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book>(`${environment.URL_API}${this.bookUrl}`, {});
  }

  getBookDetail(id: string) {
    return this.http.get<Book>(`${this.URL_API}${this.routeBook}/${id}`);
  }
}
