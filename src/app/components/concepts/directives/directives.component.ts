import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: []
})
export class DirectivesComponent implements OnInit {
  //attribute directives variables
  myColor: string = 'red';

  //structural directive varibles
  isLoggedIn: boolean = false;
  skillsList: Array<string> = [
    "html", "css", "js", "ng", "react", "mean"
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
