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

  constructor(public authService: AuthService, private router: Router,
    public fb: FormBuilder) {
      this.loginForm = fb.group({
        email: new FormControl('', Validators.compose([
          Validators.email,
          Validators.required
    ])),
        password: new FormControl('', Validators.required)
    });
}

  ngOnInit(): void {
  }

  doLogin(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }
  logout() {
    this.authService.logout();
  }

}
