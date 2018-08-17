import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  choosePersonVisible = false;

  showChoosePerson(): void {
    this.choosePersonVisible = !this.choosePersonVisible;
  }
 
}
