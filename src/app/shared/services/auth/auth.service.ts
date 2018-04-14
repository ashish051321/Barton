import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {

  }

  loginWithGoogle(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));

  }

  logout() {
    this.afAuth.auth.signOut();

  }

  isLoggedIn() {
    console.log("Login status", this.afAuth.authState);
    return ((this.afAuth.authState) != null);
  }

  isAdmin() {
    return true;
  }

}
