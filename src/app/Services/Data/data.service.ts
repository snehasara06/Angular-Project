import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/Models/loginUser';
import { dataUser } from 'src/app/Models/dataUser';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }
  _id!: dataUser;
  name!: dataUser;
  mailId!: dataUser;
  role!: dataUser;
  password!: dataUser;
  confirmPassword!: dataUser;
  _v!: number;

  user!: dataUser[]
  selectedUser!: dataUser;
  loginRole!: String;


  readonly baseUrl = "http://localhost:8080/flightDetails";
  postFlight(form:FormControl){
    return this.http.post(this.baseUrl,form);
  }
  // dataToEdit() {
  //   return this.selectedUser._id;
  // }
  // getData() {
  //   return this.http.get<any>(this.baseUrl)
  // }
  // getDataById(_id: String) {
  //   return this.http.get<any>(this.baseUrl + `${_id}`)
  // }
  // postData(userdata: dataUser) {
  //   return this.http.post(this.baseUrl + 'register', userdata)
  // }
  // putData(user1: dataUser) {
  //   console.log(user1)
  //   return this.http.put(this.baseUrl + '/update' + `${user1._id}`, user1, { responseType: 'text' })
  // }
  // deleteData(_id: String) {
  //   return this.http.delete(this.baseUrl + 'delete/' + `${_id}`, { responseType: 'text' })
  // }
  // loginAdmin(userLogin: loginUser) {
  //   return !!localStorage.getItem('token');
  // }
  // login(login1: dataUser) {
  //   return this.http.post(this.baseUrl + 'login', login1)
  // }
  // loggedIn(): boolean {
  //   return !!localStorage.getItem('token');
  // }
  // getToken() {
  //   return localStorage.getItem('token')
  // }
  // logout() {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('role')
  //   this.router.navigate(['login'])
  // }
}
