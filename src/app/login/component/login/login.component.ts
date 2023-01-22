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

  constructor(private _formBuilder: FormBuilder, private _service: ApiService) {}

  submitData() {
    this.username = this.firstFormGroup.controls['firstCtrl'].value  as string;
    this.password = this.secondFormGroup.controls['secondCtrl'].value  as string;

    // @ts-ignore
    this._service.login({username: this.username, password: this.password}).subscribe({
      next: (data: Token) => {
        this.isLogged = true;
        this.token = data.token;
        localStorage.setItem('token', data.token)
        console.log(data.token, this.isLogged)
      },
      error: (err: any) => {
        this.isLogged = false;
        console.log(err)
      }
    })
  }

  getOTP() {
    this._service.getOTP().subscribe({
      next: (OTP) => {
        console.log("OTP", OTP)
      },
      error: (err) => console.log(err)
    })
  }

  insertOTP(value: string) {
    console.log("valor input", value)
    this._service.sendOTP(value).subscribe({
      next: (OTP: any) => {
        console.log("OTP", OTP)
        this.otp = OTP.OTP;
      },
      error: (err) => console.log(err)
    })
  }
}
