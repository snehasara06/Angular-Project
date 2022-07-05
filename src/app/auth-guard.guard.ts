import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './Services/Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, 
    private loginService:LoginService) { }
    
  canActivate(): boolean {
    if (this.loginService.loggedIn()) {
      return true;
    }
    else{
      window.alert("Login to continue!");
      this.router.navigate(['/login']);
      return false;
    }
  }

}


