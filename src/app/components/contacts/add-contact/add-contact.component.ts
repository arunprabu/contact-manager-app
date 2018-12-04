import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  //
  contactData: {} = {
    username: "",
    email: "",
    phone: ""
  }

  constructor() { }

  ngOnInit() {
  }

  createContactHandler( formData: NgForm){
    //console.log(this.contactData);
    console.log(formData);
    //if / else based validations for the form field
    console.log(formData.value);
    
    
  }
}
