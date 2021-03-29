import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-item-details',
  templateUrl: './quote-item-details.component.html',
  styleUrls: ['./quote-item-details.component.css'],
})
export class QuoteItemDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() like = new EventEmitter();
  @Output() dislike = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  likeQuote = () => {
    this.like.emit();
  };
  dislikeQuote = () => {
    this.dislike.emit();
  };
}
