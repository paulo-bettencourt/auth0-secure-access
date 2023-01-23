import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {Token} from "../../../interfaces/token.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  username: string = this.firstFormGroup.controls['firstCtrl'].value  as string;
  password: string = this.secondFormGroup.controls['secondCtrl'].value  as string;
  isLogged = false;
  token!: string;
  otp!: string;
  nextButtonIfOTPConfirmed!: any;

  constructor(private _formBuilder: FormBuilder, private _service: ApiService) {}

  getOTP() {
    this.username = this.firstFormGroup.controls['firstCtrl'].value  as string;
    this.password = this.secondFormGroup.controls['secondCtrl'].value  as string;
console.log("DADOS", this.username)
    this._service.getOTP({username: this.username, password: this.password}).subscribe({
      next: (OTP: any) => {
        this.otp = OTP.OTP;
        console.log("OTP", OTP);
      },
      error: (err) => console.log(err)
    })
  }

  confirmOTP(OTP: string) {
    console.log("valor input", OTP)
    this._service.confirmOTP({otp: OTP}).subscribe({
      next: (data: any) => {
        console.log("Confirmed token", data)
        this.token = data.token;
        localStorage.setItem('token', data.token)
        this.nextButtonIfOTPConfirmed = document.getElementById('nextButtonOTP') as HTMLElement;
        this.nextButtonIfOTPConfirmed.click();
        this.isLogged = true;
        this.token = data.token;
      },
      error: (err) => {
        console.log(err),
          this.nextButtonIfOTPConfirmed = document.getElementById('nextButtonOTP') as HTMLElement;
        this.nextButtonIfOTPConfirmed.click();
          this.isLogged = false;
      }
    })
  }
}
