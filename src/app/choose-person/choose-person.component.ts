import { Component, OnInit } from '@angular/core';
import { QuoteGeneratorService } from '../quote-generator.service';

@Component({
  selector: 'app-choose-person',
  templateUrl: './choose-person.component.html',
  styleUrls: ['./choose-person.component.css']
})
export class ChoosePersonComponent{
  persons = ['Michael Scott',"Princess Carolyn","Ron Swanson","Tina Belcher"];
  selectedPerson: string;
  currentQuote: string;

  constructor(private quoteGeneratorService: QuoteGeneratorService) { }

  showQuote(clickedPerson: string) {
    this.selectedPerson= clickedPerson;
    // Get current quote to show
    this.currentQuote = this.quoteGeneratorService.generateQuote(this.selectedPerson);
    
  }
  

}
