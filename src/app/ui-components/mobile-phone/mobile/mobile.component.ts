import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {

  @Input('OTP') OTP: any;

  copyOTP() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(this.OTP);
  }
}
