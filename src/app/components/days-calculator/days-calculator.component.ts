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
 
  // expirationDate : Date = new Date();
  FILL_DAYS = 45;
  nextFill: Date = new Date();
  fillDateStr : String;
  daysRemaining: number;

  constructor() { 
   
  }

  ngOnInit(): void {
  let today = new Date();
  this.startDate.setFullYear(2021);
  this.startDate.setMonth(2);
  this.startDate.setDate(7);
// Need to catch December dates moving into new year

  this.nextFill.setMonth(this.startDate.getMonth() + 1);
  this.nextFill.setFullYear(this.startDate.getFullYear() + 45);
  this.nextFill.setFullYear(2020);
  this.fillDateStr = this.nextFill.toLocaleString();


  this.daysRemaining = Math.abs(Math.floor((this.nextFill.getTime() - today.getTime())/(1000*60*60*24)));

  console.log(this.daysRemaining);

  }

}
