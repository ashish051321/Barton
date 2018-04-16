import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { AuthService } from '../shared/services/auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  items: MenuItem[];


  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {


    this.items = [
      { label: 'All Folks', routerLink: ['empdetails'] },
      {
        label: 'New People', icon: 'fa-plus', items: [
          { label: 'Quick Add', routerLink: ['edit'] },
          { label: 'Add Detailed', routerLink: ['edit'] },
          { label: 'Bulk Add', routerLink: ['bulkupload'] },
        ]
      },
      {
        label: 'Settings', icon: 'fa-gear', items: [
          { label: 'Admin Settings', routerLink: ['adminsettings'] },
          { label: 'App Settings', routerLink: ['appsettings'] },
          { label: 'WorkList', routerLink: [''] }
        ]
      },
      { label: 'Logout', icon: 'fa-sign-out', command: (evt) => { this.logout(); } }
    ];

  }

  searchandEdit(empid) {//here i have got html element reference
    var x = empid.value;
    empid.value = "";
    this.router.navigate(['edit/' + x])
  }

  ngOnDestroy() {
    console.log("Profile Component being destroyed! Logging out.");
    this.authService.logout();
  }

  logout() {
    console.log("logout button was clicked !");
    this.authService.logout();
  }

}
