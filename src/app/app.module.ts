import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { DatabindingComponent } from './components/concepts/databinding/databinding.component';
import { SiComponent } from './components/concepts/databinding/si/si.component';
import { PbComponent } from './components/concepts/databinding/pb/pb.component';
import { EbComponent } from './components/concepts/databinding/eb/eb.component';
import { TwbComponent } from './components/concepts/databinding/twb/twb.component';
import { CpbComponent } from './components/concepts/databinding/cpb/cpb.component';
import { CebComponent } from './components/concepts/databinding/ceb/ceb.component';
import { DirectivesComponent } from './components/concepts/directives/directives.component';
import { ColorizrDirective } from './directives/colorizr.directive';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';

//main switch box
//Decorator 
@NgModule({
  declarations: [  //the following core elements will be part of ng app 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    DatabindingComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    DirectivesComponent,
    ColorizrDirective,
    ContactsComponent,
    AddContactComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // Step3: ng module should be kickstarted with a component -- root component
})
export class AppModule { }
