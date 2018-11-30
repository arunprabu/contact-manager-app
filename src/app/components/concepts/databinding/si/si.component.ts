import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {
  
  //ts
  devName: string = "Arun";
  exp: number = 13;
  isLoggedIn: boolean = false;

  authUsername = "arun"; // valid within ts 

  //methods
  add(a, b){
    return a + b;
  }  

  constructor() { }

  ngOnInit() {
  }

}
