import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../Services/Flight/flight-service.service';

@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.scss']
})
export class FlightSummaryComponent implements OnInit {
 departure:string='';
  constructor(private fService:FlightServiceService) { }

  ngOnInit(): void {
    this.departure=this.fService.fData;
    console.log(this.fService.fData)

  }

}
