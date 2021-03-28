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

  deleteQuote = (id: any) => {
    this.quotes.splice(id, 1);
  };
}
