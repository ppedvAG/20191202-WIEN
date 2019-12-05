import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsOverviewComponent } from './labs-overview/labs-overview.component';



@NgModule({
  declarations: [LabsOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LabsOverviewComponent
  ]
})
export class LabsModule { }
