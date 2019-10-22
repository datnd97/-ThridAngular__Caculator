import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  output:number;
  first:number;
  second:number;
  opetator:string;

  onFirstChange(value) {
    this.first = Number(value);
  }
  onSecondChange(value){
    this.second =Number(value);
  }
  onSelectChange(value) {
    this.opetator = value;
  }
  calculate() {
    switch (this.opetator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
