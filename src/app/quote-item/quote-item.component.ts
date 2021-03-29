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
  // @Output() highestUpVote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // highlightHighest() {
  //   this.highestUpVote.emit();
  // }



  toggleShowDetails = () => {
    this.quote.showDetails = !this.quote.showDetails;
  };
  upvote() {
    this.quote.likes += 1;
    console.log(this.quote.likes);
  }
  downvote() {
    this.quote.dislikes += 1;
  }

  deleteQuote = (id: any) => {
    this.delete.emit(id);
  };
}
