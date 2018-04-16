import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  loginFlag: boolean;
  myUser: any;//this is going to contain null if not logged in or the user creds if logged in.

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // here i am subscribing to the authState just to get the user credentials, whenever the user has logged in
    this.afAuth.authState.subscribe(user => { this.myUser = user }, error => { console.log(error); })
  }

  loginWithGoogle(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  //logging out logs you out from  firebase and also takes you to logout screen of google.
  logout() {
    console.log(this.myUser);
    this.afAuth.auth.signOut().then(() => {
      window.location.assign('https://accounts.google.com/Logout');
    }, (error) => {
      console.log(error);
    });
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  isAdmin() {
    return true;
  }


}
