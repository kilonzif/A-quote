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

  setComplete = (index: any) => {
    // this.quote[index].showDetails = !this.quote[index].showDetails;
  };

  deleteQuote = (id: any) => {
    this.delete.emit(id);
  };
}
