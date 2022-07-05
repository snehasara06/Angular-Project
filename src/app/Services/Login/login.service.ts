import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  _id!:Login;
  name!: Login;
  mailId!: Login;
  pass1!: Login;
  pass2!: Login;
  role!:Login;

  email!: Login;
  password!: Login;

  loginUser!: Login[];
  selectedLogin!: Login;
  loginRole!: String;

  readonly baseUrl = "http://localhost:8080";

  login(data: Login) {
    return this.http.post(this.baseUrl + '/login', data);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.router.navigate(['/login'])
  }
  postUser(user:Login){
    return this.http.post(this.baseUrl+'register',user)
  }
}
