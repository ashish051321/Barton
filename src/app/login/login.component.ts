import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    // this.authService.isLoggedIn is returning an observable authState
    this.authService.isLoggedIn().subscribe(user => {
      if (user) {
        console.log("The user is already logged in.");
        console.log("UserName: " + user.displayName);
        console.log("UserEmail: " + user.email);
        this.navigateNow();
      }
      else {
        console.log("The user is logged out. Please log in.");
      }
    });//subscription ends
  }

  navigateNow() {
    //right now I am just routing on the admin path. Later we will 
    //check for admin and user distinction.
    this.router.navigate(['/admin']);
  }

  ngOnInit() {
  }

  logInWithGoogle() {
    this.authService.loginWithGoogle().subscribe(
      success => {
        //once I have succedded 

        if (this.authService.isAdmin()) {
          this.router.navigate(['/admin']);//its the admin that has logged in
        }
        else {//its a simple user that has logged in
          this.router.navigate(['/user']);
        }
      },
      error => {

      }
    );
  }
}
