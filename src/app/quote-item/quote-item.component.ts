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
  @Output() vote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleShowDetails = () => {
    this.quote.showDetails = !this.quote.showDetails;
  };
  upvote() {
    this.quote.likes += 1;
    this.vote.emit();
  }
  downvote() {
    this.quote.dislikes += 1;
  }

  deleteQuote = (id: any) => {
    this.delete.emit(id);
  };

  popularQuotes(): void {
    const upvoted: number = Math.max.apply(
      Math,
      this.quote.map((chosen) => chosen.likes)
    );
    if (upvoted > 0) {
      const upvotedQuote: any = this.quote.find(
        (selected) => selected.likes === upvoted
      );
      const favIndex: number = this.quote.indexOf(upvotedQuote);
      this.quote.map((quote) => {
        if (favIndex === this.quote.indexOf(quote)) {
          this.quote.isFavorite = true;
          console.log(favIndex);
        } else {
          quote.isFavorite = false;
        }
      });
    }
  }
}
