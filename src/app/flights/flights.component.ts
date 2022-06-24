import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
// import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

depart:string='';

  constructor(private fService:FlightServiceService) { }
  ngOnInit(): void {
    // this.fService.flightData=this.depart;
    // console.log(this.fService.fData)
  }
  onSubmit(){
     this.fService.flightData=this.depart;
    console.log(this.fService.fData)
  }

  
}
