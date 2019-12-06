import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwconfirm',
  templateUrl: './pwconfirm.component.html',
  styleUrls: ['./pwconfirm.component.css']
})
export class PwconfirmComponent implements OnInit {
  ngModelBinding;
  ngFormValue;

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(argument) {
    this.ngFormValue = argument;
  }

}
