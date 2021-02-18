import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from './layout/layout.module';
import {ContactsModule} from './contacts/contacts.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SpinnerWrapperModule} from './spinner/spinner-wrapper.module';
import {LoaderService} from './services/loader.service';
import { GenericErrorModalComponent } from './modals/generic-error-modal/generic-error-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { GenericSuccessModalComponent } from './modals/generic-success-modal/generic-success-modal.component';
import {ModalService} from './services/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GenericErrorModalComponent,
    GenericSuccessModalComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatDividerModule,
    MatRippleModule,
    LayoutModule,
    ContactsModule,
    MatProgressSpinnerModule,
    SpinnerWrapperModule
  ],
  providers: [LoaderService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
