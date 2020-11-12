import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  issueDate: String;

  constructor() { }

  ngOnInit(): void {
  }

  setProfile(){
    console.log("Calling User service to set profile data");
  }

}
