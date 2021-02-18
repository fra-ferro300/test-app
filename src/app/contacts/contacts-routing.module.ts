import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {ContactsComponent} from './contacts.component';
const routes: Routes = [
  { path: '', component: ContactsComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
