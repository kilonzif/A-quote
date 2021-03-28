import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteItemDetailsComponent } from './quote-item-details/quote-item-details.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesAppComponent,
    QuotesListComponent,
    QuotesFormComponent,
    QuoteItemComponent,
    QuoteItemDetailsComponent,
    DateCountPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
