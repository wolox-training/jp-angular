import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { ActivatedRoute} from '@angular/router';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book: Book;
  constructor(private bookService: BookServiceService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;
    this.bookService.getBookDetail(id)
    .subscribe(result => {
      console.log(result);
      this.book = result;
    });

  }
}
