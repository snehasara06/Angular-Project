import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightTableService {
  id: any;
  readonly baseUrl = "http://localhost:8080/flightTable/";
  dropList: Flight[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getDropList() {
    return this.http.get(this.baseUrl)
  }
  getAvailableFlights(from: any, to: any) {
    return this.http.get(this.baseUrl + `/${from}` + `/${to}`);
  }

  set setFlightDetail(val: any) {
    this.id = val
  }
  get getFlightDetail() {
    return this.id;
  }
  getFlightData(_id: any) {
    return this.http.get(this.baseUrl + `${_id}`)
  }
}
