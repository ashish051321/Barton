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
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';


const myroutes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: ProfileComponent, canActivate: [LoginGuardService],
    children: [
      { path: "bulkupload", component: BulkuploadComponent },
      { path: 'edit/:empid', component: NeworEditEmployeeComponent },
      { path: 'edit', component: NeworEditEmployeeComponent },
      { path: 'empdetails', component: EmpdetailsComponent },
      {
        path: 'adminsettings', loadChildren: 'app/admin-settings/admin-settings.module#AdminSettingsModule'
      },
      {
        path: 'appsettings', loadChildren: 'app/app-settings/app-settings.module#AppSettingsModule'
      }
    ]
  },
  { path: 'user', component: ProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }