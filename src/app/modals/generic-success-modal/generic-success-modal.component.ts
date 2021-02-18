import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-generic-success-modal',
  templateUrl: './generic-success-modal.component.html',
  styleUrls: ['./generic-success-modal.component.css']
})
export class GenericSuccessModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
