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
    if (this.authService.isLoggedIn()) {
      if (this.authService.isAdmin()) {
        //navigate to admin landing page
        this.router.navigate(['/admin']);
      }
      else {
        this.router.navigate(['/user']);
      }
    }
  }

  ngOnInit() {
  }

  logInWithGoogle() {
    this.authService.loginWithGoogle().subscribe(
      success => {
        if (this.authService.isAdmin()) {
          //navigate to admin landing page
          this.router.navigate(['/admin']);
        }
        else {
          this.router.navigate(['/user']);
        }
      },
      error => {

      }
    );
  }
}
