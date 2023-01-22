import { Component } from '@angular/core';
import {User} from '../../../interfaces/user.interface'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  token: string  = '';

  constructor() {
    // @ts-ignore
    this.token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    console.log(this.token)
  }

  users: User[] = [
    {value: 'huey', viewValue: 'Huey'},
    {value: 'dewey', viewValue: 'Dewey'},
    {value: 'louie', viewValue: 'Louie'},
  ];

}
