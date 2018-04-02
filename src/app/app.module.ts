import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    AngularFireAuthModule],
  declarations: [AppComponent, HomeComponent, BulkuploadComponent, PagenotfoundComponent, NeworEditEmployeeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }