import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  choosePersonVisible = false;
  arrowAnimate = false;

  showChoosePerson(): void {
    this.arrowAnimate = !this.arrowAnimate;
    this.choosePersonVisible = !this.choosePersonVisible;
  }
 
}
