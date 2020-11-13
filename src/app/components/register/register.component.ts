import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(public authService: AuthService, private router: Router,
    public fb: FormBuilder,) {
        this.registerForm = fb.group({
            email: new FormControl('', Validators.compose([
                Validators.email,
                Validators.required
          ])),
            password: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            cardIssueDate: new FormControl('', Validators.required),
            county: new FormControl('', Validators.required),

          })};

  ngOnInit(): void {
  }

  setProfile(){
    //NEED TO WRITE THE UUID INTO USER MODEL
    this.authService.signup(this.registerForm.value.email, this.registerForm.value.password);
  }

}
