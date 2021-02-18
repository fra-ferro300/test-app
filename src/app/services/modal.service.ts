import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GenericErrorModalComponent} from '../modals/generic-error-modal/generic-error-modal.component';
import {GenericSuccessModalComponent} from '../modals/generic-success-modal/generic-success-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) {}
  openErrorDialog(message: string): MatDialogRef<any>{
    return this.dialog.open(GenericErrorModalComponent,
      { width: '30em', minHeight: '15em', panelClass: 'custom-dialog-container', disableClose: true, data: {message}});
  }
  openSuccessDialog(message: string): MatDialogRef<any>{
    return this.dialog.open(GenericSuccessModalComponent,
      { width: '30em', minHeight: '15em', panelClass: 'custom-dialog-container', disableClose: true, data: {message: message}});
  }
}
