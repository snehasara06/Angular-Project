import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DropDownlist } from '../Models/DropDownList/drop-downlist';
import { DropDownService } from '../Services/DropDown/drop-down.service';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { FlightTableService } from '../Services/FlightTable/flight-table.service';
import { flight } from './flight';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flightData = new flight();
  depart: any;
  arrive: any;
  from: any;
  to: any;
  flight: any = [];
  error: any;

  constructor(private flightService: FlightServiceService,
    public dropDownService: DropDownService,
    private router: Router,
    private flightTableService: FlightTableService) { }


  public arrayDrop: any = [];

  ngOnInit(): void {
    this.dropDownService.getDropDown().subscribe((res) => {
      this.dropDownService.dropDown = res as DropDownlist[];
      this.arrayDrop = res;
    })
  }

  onSubmit(flightForm: NgForm) {

    this.from = Object.values(flightForm.value)[1]
    this.to = Object.values(flightForm.value)[2]

    if (this.to == "" && this.from == "") {
      alert("From and to are required");
      this.router.navigate(['/flights']);
    }
    else if (this.to == this.from) {
      alert("From and to are same");
      this.router.navigate(['/flights']);
    }
    else {
      this.router.navigate(['/flights/flightTable'])
    }
    this.flight = flightForm.value;
    this.flightService.setData = this.flight;
    this.flightTableService.getAvailableFlights(this.from, this.to).subscribe((res) => {
      if (Object.values(res)[0] == 'Not available') {
        alert(Object.values(res)[0]);
      }
    })
  }
}
