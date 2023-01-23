import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class RequestAdminInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('token');
    if(userToken) {
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userToken}`),
      });
      return next.handle(modifiedReq);
    } else {
      return next.handle(req);
    }
  }
}
