import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsOverviewComponent } from './labs-overview/labs-overview.component';
import { TimeComponent } from './time/time.component';
import { DiceComponent } from './dice/dice.component';
import { RatingComponent } from './rating/rating.component';
import { CardComponent } from './card/card.component';
import { DiashowComponent } from './diashow/diashow.component';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    LabsOverviewComponent,
    TimeComponent,
    DiceComponent,
    RatingComponent,
    CardComponent,
    DiashowComponent,
    HomeawayComponent,
    TimerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LabsOverviewComponent
  ]
})
export class LabsModule { }
