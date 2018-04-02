import { Component } from '@angular/core';
import  {Router} from '@angular/router';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
constructor(private router:Router){

}
ngOnInit(){
  console.log($);
}

searchandEdit(empid){//her i have got html element reference
var x= empid.value;
empid.value="";
this.router.navigate(['edit/'+x])
}

}
