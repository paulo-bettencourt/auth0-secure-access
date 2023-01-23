import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent, DialogOverviewExampleDialog} from './dashboard-component/dashboard/dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    DashboardComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
