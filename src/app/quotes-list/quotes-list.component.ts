import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],
})
export class QuotesListComponent implements OnInit {
  @Input() quotes: Quotes[];
  constructor() {}

  ngOnInit(): void {}


  deleteQuote = (deleteRequest: boolean, id: any) => {
    deleteRequest = confirm('Are you sure you want to delete this?');
    if (deleteRequest == true) {
      this.quotes.splice(id, 1);
    }
  };
}
