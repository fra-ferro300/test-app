import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {LayoutComponent} from './layout.component';
const routes: Routes = [
  { path: '', component: LayoutComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
