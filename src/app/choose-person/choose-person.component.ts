import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-person',
  templateUrl: './choose-person.component.html',
  styleUrls: ['./choose-person.component.css']
})
export class ChoosePersonComponent{
  persons = ['Michael Scott',"Lucille Bluth","Ron Swanson","Tina Belcher"];
  constructor() { }

  

}
