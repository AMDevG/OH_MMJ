import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-calculator',
  templateUrl: './days-calculator.component.html',
  styleUrls: ['./days-calculator.component.css']
})
export class DaysCalculatorComponent implements OnInit {

  // TEST DATA
  startDate: Date = new Date("2020-06-02");

  issueDate : Date = new Date();
  expirationDate : Date = new Date();
  FILL_DAYS = 45;
  nextFill: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    
    this.nextFill.setDate(this.startDate.getDate() + this.FILL_DAYS);
    console.log("Next fill is: " + this.nextFill.toDateString());

    // PULL DATA FROM CURRENT USER MODEL

  }

}
