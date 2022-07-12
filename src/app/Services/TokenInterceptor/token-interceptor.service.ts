import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../Auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthService)
    console.log(authService.getToken());
    console.log("TOKENINTERCEPTOR SERVICE: " + Object.entries(req))
    let reqToken = req.clone({
      setHeaders: {
        // Authorization: 'Bearer ' + this.dataService.getToken()
        Authorization: `Bearer ${authService.getToken()}`

      }
    })
    return next.handle(reqToken).pipe(
      catchError((error) => {

        return throwError(error)
      })
    )
  }
}
