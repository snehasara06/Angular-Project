import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  constructor() { }
  firstname: string = '';
  set flightData(value: string) {
    this.firstname = value;
    console.log(this.firstname);
  }
  get fData() {
    return this.firstname;
  }
}
