import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Services/Auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router, 
    private authService:AuthService) { }
    
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    else{
      window.alert("Login to continue!");
      this.router.navigate(['/login']);
      return false;
    }
  }

}


