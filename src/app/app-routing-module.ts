import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {BulkuploadComponent} from './bulkupload/bulkupload.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { NeworEditEmployeeComponent } from './neworeditempl/neworeditempl.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';


const myroutes = [
{path:'home',component:HomeComponent},
{path:"bulkupload",component:BulkuploadComponent},
{path:'edit/:empid',component: NeworEditEmployeeComponent},
{path:'edit',component: NeworEditEmployeeComponent},
{path:'empdetails',component: EmpdetailsComponent},
{path: '',redirectTo:'/home',pathMatch:"full"},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(myroutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}