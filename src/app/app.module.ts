import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AppRoutingModule } from './app-routing-module';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { NeworEditEmployeeComponent } from './neworeditempl/neworeditempl.component';

import { LoginGuardService } from './shared/route-guards/login-guard.service';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


//different services in ur application
import { DataService } from './shared/services/data/data.service';
import { ComponentCreateService } from './shared/services/component-create/component-create.service';
import { AuthService } from './shared/services/auth/auth.service';

//primeng
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';


import { AddcompetencyComponent } from './neworeditempl/addcompetency/addcompetency.component';
import { AddcertificationComponent } from './shared/components/addcertification/addcertification.component';
import { LoginComponent } from './login/login.component';
import { App2Component } from './app2/app2.component';
import { ProfileComponent } from './profile/profile.component';


const firebaseConfig = {
  apiKey: "AIzaSyAGnXoUeYiceWVB7FK83bAta7ufU6BL7uI",
  authDomain: "emptracker-a9a1b.firebaseapp.com",
  databaseURL: "https://emptracker-a9a1b.firebaseio.com",
  projectId: "emptracker-a9a1b",
  storageBucket: "emptracker-a9a1b.appspot.com",
  messagingSenderId: "6815018090"
};



@NgModule({

  imports: [BrowserModule, FormsModule, AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MenubarModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule
  ],

  declarations: [
    HomeComponent,
    BulkuploadComponent,
    PagenotfoundComponent,
    NeworEditEmployeeComponent,
    EmpdetailsComponent,
    AddcompetencyComponent,
    AddcertificationComponent,
    LoginComponent,
    App2Component,
    ProfileComponent],

  providers: [DataService, ComponentCreateService, LoginGuardService, AuthService],

  entryComponents: [AddcompetencyComponent, AddcertificationComponent],

  bootstrap: [App2Component]
})
export class AppModule { }
