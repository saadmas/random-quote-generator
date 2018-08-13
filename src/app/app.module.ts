import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PresentQuoteComponent } from './present-quote/present-quote.component';

import { QuoteGeneratorService } from './quote-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    WelcomeComponent,
    PresentQuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuoteGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
