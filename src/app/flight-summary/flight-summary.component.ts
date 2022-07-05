import { Component, OnInit } from '@angular/core';
import { Flight } from '../Models/flight';
import { FlightServiceService } from '../Services/Flight/flight-service.service';

@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.scss']
})
export class FlightSummaryComponent implements OnInit {

 departure:string='';
 arrival:string='';
//  fly!:Flight;
  constructor(private fService:FlightServiceService) { }

  ngOnInit(): void {
    this.departure=this.fService.fData;
    this.arrival=this.fService.fData;
    // console.log(this.departure);

    // console.log(this.arrival)
    // this.departure=this.fService.firstname;
    // console.log("Depart:"+this.fService.flightData)

  }

}
