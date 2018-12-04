import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './components/concepts/databinding/databinding.component';
import { DirectivesComponent } from './components/concepts/directives/directives.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';

const routes: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: DatabindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/new', component: AddContactComponent},
  { path: 'contacts/1', component: ContactDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    // registering the configured routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
