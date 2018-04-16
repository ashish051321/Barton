import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { AppOptionsComponent } from './app-options/app-options.component';

@NgModule({
  imports: [
    CommonModule,
    AppSettingsRoutingModule
  ],
  declarations: [AppOptionsComponent]
})
export class AppSettingsModule { }
