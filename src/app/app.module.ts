import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/header/search.component';
import { DatabindingComponent } from './concepts/databinding/databinding.component';
import { SiComponent } from './concepts/databinding/si/si.component';
import { PbComponent } from './concepts/databinding/pb/pb.component';
import { EbComponent } from './concepts/databinding/eb/eb.component';
import { TwbComponent } from './concepts/databinding/twb/twb.component';

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
    TwbComponent
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
