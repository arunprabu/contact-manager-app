import { Component, OnInit } from '@angular/core';

//Decorator 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ts 
  appName: string = "Contact Manager App";
  
  constructor() { }

  ngOnInit() {
  }

}
