import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeaway',
  templateUrl: './homeaway.component.html',
  styleUrls: ['./homeaway.component.css']
})
export class HomeawayComponent implements OnInit {
  isHome: boolean;
  text: string = `mouse
  here`;
  constructor() { }

  ngOnInit() {
  }

  home(){
    this.isHome = true;
  }

  away(){
    this.isHome = false;
  }

  getText() {
    return (this.isHome) ? 'HOME' : 'AWAY';
  }



}
