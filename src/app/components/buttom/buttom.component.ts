import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {
  @Input() text: string | undefined;
  @Output() btnClick = new EventEmitter
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  
  sayMessage() {
    this.fontColor = 'red'
    this.btnClick.emit()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
