import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppOptionsComponent } from './app-options/app-options.component';

const routes: Routes = [
  { path: '', component: AppOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
