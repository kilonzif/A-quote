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
  @Output() highestLikes = new EventEmitter();
  @Output() vote = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  likeQuote = (voted: number) => {
    this.like.emit();
    this.vote.emit(voted);
  };
  dislikeQuote = () => {
    this.dislike.emit();
  };
  highest = () => {
    this.highestLikes.emit();
  };

  deleteQuote(id: any) {
    this.delete.emit();
  }
}
