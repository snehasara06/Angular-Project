import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/Models/loginUser';
import { dataUser } from 'src/app/Models/dataUser';
import { FormControl } from '@angular/forms';
import { data } from './data';

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

  // dataList:data[]=[]

  readonly baseUrl = "http://localhost:8080/flightDetails";
  postFlight(form:any){
    console.log("firstttt"+form.firstname);
    return this.http.post(this.baseUrl,form);
  }
 
}
