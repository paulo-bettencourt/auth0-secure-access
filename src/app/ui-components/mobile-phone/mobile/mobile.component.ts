import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {

  @Input('OTP') OTP: any;

  constructor() {
    console.log("OTP DO COMPONENTE MOBILE: ", this.OTP)
  }

}
