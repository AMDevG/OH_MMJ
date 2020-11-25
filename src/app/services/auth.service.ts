import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: firebase.User;
  authSubscription: any;

constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.authSubscription = this.firebaseAuth.authState.subscribe( user => {
      if (user) {
        console.log("In Auth contstructor");
        this.user = user;
        sessionStorage.setItem('cur-user', JSON.stringify(this.user.uid));
        console.log("set session");
      }
      else{
        sessionStorage.setItem('cur-user', null);
      }
    });
  }

get isAuthenticated(): boolean {
    console.log("User is authed");
    const user = JSON.parse(sessionStorage.getItem('cur-user'));
    console.log("Cur user: " + user);
    return user !== null;
}

async logout() {
  await this.firebaseAuth.signOut();
  sessionStorage.removeItem('cur-user');
  this.authSubscription.unsubscribe();
  console.log('Router on logout: ', this.router.routerState.snapshot);
  this.router.navigate(['/login']);
  location.replace('login');
}


login(email: string, password: string) {

      this.firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
          // this.user = user;
          this.router.navigate(['days']);
          // sessionStorage.setItem('cur-user', JSON.stringify(this.user.uid));
          
        })
        .catch(err => {
          sessionStorage.removeItem('cur-user');
          console.log('Something went wrong in login:',err.message);
          this.router.navigate(['/login']);
        });
      }


signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
}
}