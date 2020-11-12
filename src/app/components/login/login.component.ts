import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) 
    {
      this.loginForm = this.formBuilder.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  login(): void {
    console.log("Login request received!");
  }

}
