import { Component, OnInit } from '@angular/core';
import { QuoteGeneratorService } from '../quote-generator.service';

@Component({
  selector: 'app-present-quote',
  templateUrl: './present-quote.component.html',
  styleUrls: ['./present-quote.component.css']
})
export class PresentQuoteComponent {
  currentQuote: String;
  prevQuote: String;

  constructor(private quoteGeneratorService: QuoteGeneratorService) {

  }

  showQuote() {
    // If it is not the FIRST time showing a quote, set previous quote
    if (this.prevQuote) {
      this.prevQuote = this.currentQuote;
    }
    // Get current quote to show
    this.currentQuote = this.quoteGeneratorService.generateQuote();
    
  }
}
