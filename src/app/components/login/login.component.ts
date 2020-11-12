import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService) 
    {
      this.loginForm = this.formBuilder.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required]]
      });
    }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password);
    this.email = this.password = ''; 
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
  logout() {
    this.authService.logout();
  }

}
