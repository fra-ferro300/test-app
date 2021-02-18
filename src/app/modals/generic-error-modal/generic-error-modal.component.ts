import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generic-error-modal',
  templateUrl: './generic-error-modal.component.html',
  styleUrls: ['./generic-error-modal.component.css']
})
export class GenericErrorModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<any>){ }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
