import { Component, OnInit } from '@angular/core';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  nome: string = '';
  email: string = '';
  commento: string = '';
  disabled: boolean;

  constructor(private modalServices: ModalService) { }

  ngOnInit(): void {
  }

  allDatasAreValid(): boolean {
    const checkValue = this.nome !== '' && (this.email !== '' && this.email.includes('@')) && this.commento !== '';
    this.disabled = !checkValue;
    return checkValue;
  }

  clearAllFields(){
    this.nome = this.email = this.commento = '';
  }

  sendData(): void {
    let dialogRef = this.modalServices.openSuccessDialog('Comunicazione inviata con successo');
    dialogRef.afterClosed().subscribe(() => {
      this.clearAllFields();
    });
  }
}
