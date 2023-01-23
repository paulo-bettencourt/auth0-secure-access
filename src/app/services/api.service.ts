import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../interfaces/login.interface";
import {Observable} from "rxjs";
import {Token} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer asidjfksadjflkasdjdfkasjfkasjfkljaskdf`
  });
  requestOptions = { headers: this.headers };

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

    return this.http.post(this.urlTerms, {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token )})

  }

}
