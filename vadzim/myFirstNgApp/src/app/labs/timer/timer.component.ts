/* timer.component.ts */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() seconds: number;
  @Output() tick: EventEmitter<number> = new EventEmitter<number>();
  @Output() startEvent: EventEmitter<void> = new EventEmitter<void>();
  remainingTime: number;
  intervalId: number;
  started: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.startEvent.emit();
    this.remainingTime = this.seconds;
    this.started = true;
    this.intervalId = window.setInterval(()=> {
      this.remainingTime--;
      this.tick.emit(this.remainingTime);
      if (this.remainingTime === 0) {
        clearInterval(this.intervalId);
        this.started = false;
      }
    }, 1000);
  }

}
