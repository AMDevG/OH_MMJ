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
  FILL_DAYS = 44;
  FILL_MILLS = this.FILL_DAYS *  24 * 60 * 60 * 1000;
  nextFill: Date = new Date();
  fillDateStr : String;
  daysRemaining: number;

  constructor() { 
   
  }

  ngOnInit(): void {
  let today = new Date();
  this.startDate.setFullYear(2020);
  this.startDate.setMonth(10);
  this.startDate.setDate(3);
// Need to catch December dates moving into new year

  this.nextFill.setTime(this.startDate.getTime() + this.FILL_MILLS);
  this.fillDateStr = this.nextFill.toLocaleString();


  this.daysRemaining = Math.abs(Math.floor((this.nextFill.getTime() - today.getTime())/(1000*60*60*24)));

  console.log(this.daysRemaining);

  }

}
