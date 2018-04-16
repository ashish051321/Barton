import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOptionsComponent } from './admin-options/admin-options.component';

const routes: Routes = [
  { path: '', component: AdminOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingsRoutingModule { }
