import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NeworEditEmployeeComponent } from './neworeditempl/neworeditempl.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { LoginComponent } from './login/login.component';
//route guards
import { LoginGuardService } from './shared/route-guards/login-guard.service';



const myroutes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'authorized', canActivate: [LoginGuardService], children: [
      { path: 'home', component: HomeComponent },
      { path: "bulkupload", component: BulkuploadComponent },
      { path: 'edit/:empid', component: NeworEditEmployeeComponent },
      { path: 'edit', component: NeworEditEmployeeComponent },
      { path: 'empdetails', component: EmpdetailsComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }