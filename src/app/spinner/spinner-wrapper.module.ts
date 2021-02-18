import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerWrapperComponent} from './spinner-wrapper.component';
import {RouterModule} from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [SpinnerWrapperComponent],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    MatProgressSpinnerModule
  ],
  exports: [SpinnerWrapperComponent]
})
export class SpinnerWrapperModule { }
