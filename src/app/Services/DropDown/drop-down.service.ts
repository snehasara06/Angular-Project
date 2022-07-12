import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownlist } from 'src/app/Models/DropDownList/drop-downlist';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http:HttpClient,private router:Router) { }
 
  readonly baseUrl="http://localhost:8080/dropDown/";
  dropDown: DropDownlist[]=[];
  getDropDown(){
    return this.http.get(this.baseUrl);
  }
}
