import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BulkuploadComponent } from './bulkupload/bulkupload.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AppRoutingModule } from './app-routing-module';
import { NeworEditEmployeeComponent } from './neworeditempl/neworeditempl.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

//service
import { DataService } from './services/data.service';

//primeng
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';





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
    BrowserAnimationsModule],
  declarations: [AppComponent, HomeComponent, BulkuploadComponent, PagenotfoundComponent, NeworEditEmployeeComponent, EmpdetailsComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
