import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { QuoteGeneratorService } from './quote-generator.service';
import { ChoosePersonComponent } from './choose-person/choose-person.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ChoosePersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuoteGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
