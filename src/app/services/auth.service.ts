import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user: Observable<firebase.User>;
  private user: firebase.User;
  authSubscription: any;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.authSubscription = this.firebaseAuth.authState.subscribe( user => {
      if (user) {
        this.user = user;
        sessionStorage.setItem('cur-user', JSON.stringify(this.user.uid));
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

  async login(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      console.log("Login in Auth Service called, moving to days");
      this.router.navigate(['days']);
      } catch (error) {
          sessionStorage.removeItem('cur-user');
          this.router.navigate(['/login']);
      }
  }

  // login(email: string, password: string) {

  //   console.log("Calling Auth Service Login");
  //   this.firebaseAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(value => {
  //       console.log('Nice, it worked!');
  //     })
  //     .catch(err => {
  //       console.log('Something went wrong:',err.message);
  //     });
  // }

  // logout() {
  //   this.firebaseAuth.signOut();
  // }
}