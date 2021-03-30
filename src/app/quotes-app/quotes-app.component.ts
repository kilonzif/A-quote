import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css'],
})
export class QuotesAppComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  color: Array<any> = [
    '#ffd31d',
    '#42240c',
    '#6a097d',
    '#9a1f40',
    '#007892',
    '#63b7af',
    '#abf0e9',
    '#c81912',
    '#f64b3c',
    '#fdba9a',
    '#45046a',
    '#5c2a9d',
    '#b5176b',
    '#f1ebbb',
    '#5fdde5',
  ];

  colorFunction = () => {
    let randomNumber = Math.floor(Math.random() * this.color.length);
    return randomNumber;
  };

  quotes: Quotes[] = [
    new Quotes(
      1,
      'Travel',
      'For roads that lead to the unknown to roads that separete us to roads that takes us home',
      'Hero Nakasaki',
      'Franklin',
      new Date(2019, 12, 11),
      0,
      0,
      false,
      this.color[this.colorFunction()],
      false
    ),
    new Quotes(
      1,
      'Food',
      'Cooking is like love. It should be entered into with abandon or not at all.',
      'Gusto Linguini',
      'Hope',
      new Date(2020, 12, 1),

      0,
      0,
      false,
      this.color[this.colorFunction()],
      false
    ),
    new Quotes(
      1,
      'Technology',
      'One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man. ',
      'Elbert Hubbard',
      'Hughes',
      new Date(2021, 2, 14),

      0,
      0,
      false,
      this.color[this.colorFunction()],
      false
    ),
  ];

  addNewQuote = (quote: any) => {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date();
    quote.color = this.color[this.colorFunction()];
    this.quotes.push(quote);
  };

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {}
}
