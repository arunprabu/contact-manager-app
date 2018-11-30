import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //// step 1: creating custom event in the name of profileLoaded
  @Output() profileLoaded = new EventEmitter<string>();

  myProfile = "John"; 

  constructor() { 
    console.log("inside constructor ")
  }

  ngOnInit() {
    console.log("inside ngOnInit");
  }

  loadProfileHandler(){
    //step 2: emit the custom event 
    this.profileLoaded.emit(this.myProfile) ;
    console.log("emitted event");
  }
}
