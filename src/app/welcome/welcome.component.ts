import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  presentQuoteVisible = false;

  showPresentQuote(): void {
    this.presentQuoteVisible = !this.presentQuoteVisible;
  }
 
}
