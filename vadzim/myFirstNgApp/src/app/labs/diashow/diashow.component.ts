import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styleUrls: ['./diashow.component.css']
})
export class DiashowComponent implements OnInit {
  @Input() images: string[];
  activeImg = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++}, 2000);
  }

}
