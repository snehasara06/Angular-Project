import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataUser } from 'src/app/Models/dataUser';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly registerUrl="http://localhost:8080/api/register";
  readonly loginUrl="http://localhost:8080/api/login";
  constructor(private http:HttpClient,private router:Router) { }
  
  registerUser(user:dataUser){
    return this.http.post<any>(this.registerUrl,user)
  }
  loginUser(user:dataUser){
    return this.http.post<any>(this.loginUrl,user);
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    }
}
