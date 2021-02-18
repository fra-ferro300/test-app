import { Component, OnInit } from '@angular/core';
import * as animations from '@angular/animations';
import {LoaderService} from '../services/loader.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner-wrapper.component.html',
  styleUrls: ['./spinner-wrapper.component.css']
})
export class SpinnerWrapperComponent implements OnInit {
  loading: boolean;
  constructor(private loadingService: LoaderService) { }

  ngOnInit(): void {
    this.loadingService.getLoadingStatus().subscribe(value => {
      this.loading = value;
    });
  }

}
