/* labs-overview.component.ts */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs-overview',
  templateUrl: './labs-overview.component.html',
  styleUrls: ['./labs-overview.component.css']
})
export class LabsOverviewComponent implements OnInit {
timerMessage: string;
startMessage: string;

  constructor() { }

  ngOnInit() {
  }

  handleStart() {
    /* return 'Time is started'; */
    this.startMessage = 'Time is started';
  }

  handleTick(seconds: number) {
    // return `Remaining time: ${seconds}`;
    this.timerMessage = `Remaining time: ${seconds}`;
  }

}
