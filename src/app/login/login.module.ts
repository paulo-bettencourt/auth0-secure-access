import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DashboardModule} from "../dashboard/dashboard.module";
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {MatTooltipModule} from '@angular/material/tooltip';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    DashboardModule,
    UiComponentsModule,
    MatTooltipModule,
    FormsModule
  ]
})
export class LoginModule { }
