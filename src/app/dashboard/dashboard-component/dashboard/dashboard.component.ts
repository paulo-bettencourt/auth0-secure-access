import { Component } from '@angular/core';
import {User} from '../../../interfaces/user.interface'
import {ApiService} from "../../../services/api.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  token: string  = '';

  constructor(private _service: ApiService) {
    // @ts-ignore
    this.token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    console.log(this.token)
  }

  submitTermsAndConditions() {
    this._service.submitTermsAndConditions(this.token).subscribe({
      next: (data) => console.log("submit response", data)
    })
  }
}
