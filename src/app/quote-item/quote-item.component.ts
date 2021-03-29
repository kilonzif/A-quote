import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
})
export class QuoteItemComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleShowDetails = () => {
    this.quote.showDetails = !this.quote.showDetails;
  };
  upvote() {
    this.quote.likes += 1;
  }
  downvote() {
    this.quote.dislikes += 1;
  }

  deleteQuote = (id: any) => {
    this.delete.emit(id);
  };
}
