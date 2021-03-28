import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css'],
})

//   public id: number,
// public quoteTitle: string,
// public quote: string,
// public authorName: string,
// public userName: string,
// public datePosted: Date,
// public likes: number,
// public dislikes: string
export class QuotesAppComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      'Technology',
      'Every click of a button is the diffrence between a good programmer and a bad one',
      'Hero Mugera',
      'Hughes',
      new Date(2020, 7, 1),
      0,
      0,
      false
    ),
    new Quotes(
      1,
      'Food',
      'The question is not can anyone cook the question is can anyone dream, and if so the only one standing inbetween a person and their dreams is themselves',
      'Hero Mugera',
      'Hughes',
      new Date(2002, 2, 14),
      0,
      0,
      false
    ),
    new Quotes(
      1,
      'Travel',
      'For roads that lead to the unknown to roads that separete us to roads that takes us home',
      'Hero Mugera',
      'Hughes',
      new Date(2013, 7, 11),
      0,
      0,
      false
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  //?Add new quote
  addNewQuote = (quote: any) => {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date();
    this.quotes.push(quote);
  };
}
