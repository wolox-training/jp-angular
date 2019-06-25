import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  books: Book;
  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(result => {
      this.books = result;
    }, error => console.log('error', error));
  }

}
