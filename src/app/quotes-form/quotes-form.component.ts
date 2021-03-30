import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes(0, '', '', '', '', new Date(), 0, 0, false, 'blue',false);
  @Output() addQuote = new EventEmitter<Quotes>();
  @Output() close = new EventEmitter();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(
      0,
      '',
      '',
      '',
      '',
      new Date(),
      0,
      0,
      false,
      'blue',
      false
    );
  }

  closeModal() {
    this.close.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
