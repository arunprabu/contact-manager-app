import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/header/search/search.component';

//main switch box
//Decorator 
@NgModule({
  declarations: [  //the following core elements will be part of ng app 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // Step3: ng module should be kickstarted with a component -- root component
})
export class AppModule { }
