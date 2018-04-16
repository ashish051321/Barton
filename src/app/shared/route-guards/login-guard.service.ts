import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log("LoginAuthGuard service called !");
    //authService returns an observable
    return this.authService.isLoggedIn().map(e => {
      if (e) {
        console.log(e, "true");
        return true;
      }
      else {
        console.log(e, "false");
        return false;
      }
    });//observable being returned

  }//canActivate() method ends

  constructor(private authService: AuthService, private router: Router) {

  }

}
