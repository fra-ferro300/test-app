import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../services/loader.service';
import {ModalService} from '../services/modal.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private loaderService: LoaderService,private modalService: ModalService) { }

  ngOnInit(): void {

  }

  addComment(): void {
    this.loaderService.show();
    window.setTimeout(() => {
      this.loaderService.hide();
    },3000);
  }

}
