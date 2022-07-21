import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
 
  tempData: any = [];
  flight: any = [];

  
  constructor(public http: HttpClient, private router: Router) { }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login'])
  }

  // Book flight component
  set setTempData(value: Object) {
    this.tempData = value;
  }
  get getTempData() {
    return this.tempData;
  }
  // Flight  component
  set setData(value: Object) {
    this.flight = value;
  }

  get getFlight() {
    return this.flight;
  }


}
