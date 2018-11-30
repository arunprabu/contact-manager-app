import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // @Input makes it as custom property
  @Input() someNumber = 10;  // default value 

  @Input() myAge = 20;

  constructor() { }

  ngOnInit() {
    console.log(this.someNumber);
  }

}
