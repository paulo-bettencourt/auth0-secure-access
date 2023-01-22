import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../interfaces/login.interface";
import {Observable} from "rxjs";
import {Token} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/data'

  constructor(private http: HttpClient) { }

  login(usernameAndPassword: Login): Observable<Login> |  Observable<Token> {
    return this.http.post<Login>(this.url, usernameAndPassword);
  }

}
