import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorklistRoutingModule } from './worklist-routing.module';
import { WorklistOptionsComponent } from './worklist-options/worklist-options.component';

@NgModule({
  imports: [
    CommonModule,
    WorklistRoutingModule
  ],
  declarations: [WorklistOptionsComponent]
})
export class WorklistModule { }
