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

  popularQuotes(): void {
    const upvoted: number = Math.max.apply(
      Math,
      this.quotes.map((chosen) => chosen.likes)
    );
    if (upvoted > 0) {
      const upvotedQuote: any = this.quotes.find(
        (selected) => selected.likes === upvoted
      );
      const favIndex: number = this.quotes.indexOf(upvotedQuote);
      this.quotes.map((quote) => {
        if (favIndex === this.quotes.indexOf(quote)) {
          this.quotes[favIndex].isFavorite = true;
          console.log(favIndex);
        } else {
          quote.isFavorite = false;
        }
      });
    }
  }
}
