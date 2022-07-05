import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Flight } from '../Models/flight';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

 

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.http.get('/api/getData')
  // }

  
}
