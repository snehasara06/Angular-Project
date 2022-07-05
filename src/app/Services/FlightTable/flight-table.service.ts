import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightTableService {

  constructor(private http:HttpClient,private router:Router) { }
  readonly baseUrl="http://localhost:8080/flightTable/";
  dropList:Flight[]=[];
  
  getDropList(){
    return this.http.get(this.baseUrl)
  }
}
