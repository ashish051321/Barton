import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { AdminOptionsComponent } from './admin-options/admin-options.component';

@NgModule({
  imports: [
    CommonModule,
    AdminSettingsRoutingModule
  ],
  declarations: [AdminOptionsComponent]
})
export class AdminSettingsModule { }
