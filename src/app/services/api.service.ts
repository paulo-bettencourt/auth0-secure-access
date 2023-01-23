import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../interfaces/login.interface";
import {Observable} from "rxjs";
import {Token} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlGetOTP = 'http://localhost:3000/get-otp';
  urlConfirmOTP = 'http://localhost:3000/confirm-otp';
  urlLogin = 'http://localhost:3000/login';
  urlTerms = 'http://localhost:3000/terms-and-conditions';

  constructor(private http: HttpClient) { }

  getOTP(usernameAndPassword: Login) {
    return this.http.post(this.urlGetOTP, usernameAndPassword);
  }

  confirmOTP(OTP: any) {
    console.log("API OTP", OTP);
    return this.http.post(this.urlConfirmOTP, OTP);
  }

  loginWithOTP(OTP: Login): Observable<Login> |  Observable<Token> {
    return this.http.post<Login>(this.urlLogin, OTP);
  }

  submitTermsAndConditions(token: string) {
    return this.http.post(this.urlTerms, {token: token});
  }
}
