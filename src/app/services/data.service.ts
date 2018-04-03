import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataService {

  mydata;

  constructor(private afd: AngularFireDatabase) {
    this.mydata = this.afd.list('/empDB').valueChanges();//this is an observale
  }

  getEmpDetails() {
    return this.mydata; // returning the observable 
  }

  setEmpDetails(data):Promise<any> {
    
    try{
      return this.afd.list('/').set('empDB', data);
    }
    catch(e){
      return new Promise(function(resolve, reject){
        reject("Data update failed !!");
      });
    }

  }
}
