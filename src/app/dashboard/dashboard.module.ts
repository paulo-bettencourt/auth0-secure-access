import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard-component/dashboard/dashboard.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
