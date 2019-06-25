import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book>(environment.URL_BOOK_SERVICE, {});
  }
}
