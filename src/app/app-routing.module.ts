import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {SpinnerWrapperComponent} from './spinner/spinner-wrapper.component';

const routes: Routes = [
  {
    path: '', component: SpinnerWrapperComponent, children: [
      {
        path: '', component: NavbarComponent , children: [
          {
            path: '', loadChildren: './layout/layout.module#LayoutModule'
          },
          {
            path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule',
          }
        ],
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
