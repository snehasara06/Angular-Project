import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  newTicket!: Flight;
  ticket: Flight[] = [];
  tempData:any=[];
flight:any=[];

  readonly url = 'http://localhost:8080/flightData/'

  constructor(public http: HttpClient,private router:Router) { }
  firstname: string = '';
  depart: string = '';

  set flightData(value: string) {
    this.firstname = value;
    console.log(this.firstname);
  }
  get fData() {
    return this.firstname;
  }

  set departure(value: string) {
    this.depart = value;
    console.log(this.depart);
  }
  get departData() {
    return this.depart;
  }
  // HTTP methods
  getTicket() {
    return this.http.get(this.url);
  }
  postTicket(fly: Flight) {
    return this.http.post(this.url, fly);
  }
  putTicket(fly: Flight) {
    return this.http.put(this.url + `/${fly._id}`, fly)
  }
  deleteTicket(_id: string) {
    console.log(_id + "\n" + "Delete Ticket");
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login'])
  }

// Book flight component
  set setTempData(value: Object) {
    this.tempData = value;
    console.log(this.tempData);
  }
  get getTempData() {
    return this.tempData;
  }
// Flight  component
  set setData(value:Object){
    this.flight=value;
    // console.log(this.flight);
  }

  get getFlight(){
    return this.flight;
  }
}
