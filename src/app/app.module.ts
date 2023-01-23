import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "./login/login.module";
import {UiComponentsModule} from "./ui-components/ui-components.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RequestAdminInterceptor} from "./interceptors/request.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    UiComponentsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: RequestAdminInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
