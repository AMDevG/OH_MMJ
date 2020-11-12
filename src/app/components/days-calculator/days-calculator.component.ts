import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-calculator',
  templateUrl: './days-calculator.component.html',
  styleUrls: ['./days-calculator.component.css']
})
export class DaysCalculatorComponent implements OnInit {

  // TEST DATA
  startDate = new Date();

  issueDate : Date = new Date();
  expirationDate : Date = new Date();
  FILL_DAYS = 45;
  nextFill: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  this.startDate.setFullYear(2020);
  this.startDate.setMonth(5);
  this.startDate.setDate(2);

  this.nextFill.setMonth(this.startDate.getMonth() + 1);
  this.nextFill.setFullYear(this.startDate.getFullYear() + 45);
  this.nextFill.setFullYear(2020);

  console.log(this.nextFill.toDateString());

  }

}
