import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoginService } from '../Login/login.service';
import { catchError,  throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let reqToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer' + this.loginService.getToken()
      }
    })
    return next.handle(reqToken).pipe(
      catchError((error) => {
        console.log(error.error);
        alert(error.message)
        return throwError(error)
      })
    )
  }
}
