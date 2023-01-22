import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MobileComponent } from './mobile-phone/mobile/mobile.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    MobileComponent
  ],
  exports: [
    ToolbarComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UiComponentsModule { }
