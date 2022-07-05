import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from '../Models/flight';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { FlightTableService } from '../Services/FlightTable/flight-table.service';


@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
  providers: [FlightServiceService]
})
export class FlightTableComponent implements OnInit {

  constructor( public flightTableService: FlightTableService) { }

  ngOnInit(): void {
    this.flightTableService.getDropList().subscribe((res) => {
    this.flightTableService.dropList=res as Flight[];
})
  }
  onSubmit(form: NgForm) {
    console.log("Form submitted!")
  }
}
