import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit, AfterViewInit {

  @ViewChild(CebComponent) cebData;

  ageOfUser1: number = 60;
  ageOfUser2: number = 70;

  nameOfTheUser: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.cebData);
  }

  getMyAge(){
    return 50;
  }

  //to listen to custom event emitted by ceb comp 
  profileLoadedHandler(evt){
    console.log(evt);
    this.nameOfTheUser = evt;
  }

}
