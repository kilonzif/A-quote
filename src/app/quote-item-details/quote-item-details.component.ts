import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-item-details',
  templateUrl: './quote-item-details.component.html',
  styleUrls: ['./quote-item-details.component.css'],
})
export class QuoteItemDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  constructor() {}

  ngOnInit(): void {}
}
