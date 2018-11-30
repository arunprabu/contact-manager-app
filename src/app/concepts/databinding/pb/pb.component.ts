import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `
    .green{
      color: green;
    }
    .red{
      color: red;
    }
    `
  ]
})
export class PbComponent implements OnInit {

  myName: string = "Arun";
  
  constructor() { }

  ngOnInit() {
  }

  isLoggedIn(){
    return true;
  }

}
