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
  depart: string = '';
  arrive: string = '';
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
      console.log(this.arrayDrop)
    })
  }

  onSubmit(flightForm: NgForm) {
    this.from = Object.values(flightForm.value)[2]
    this.to = Object.values(flightForm.value)[3]
    console.log("to:" + this.to)
    console.log("from:" + this.from)
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

    console.log(flightForm.value);
    this.flight = flightForm.value;
    this.flightService.setData = this.flight

    console.log("From :" + this.flight.from);
    console.log("To: " + this.flight.to)

    this.flightTableService.getAvailableFlights(this.from, this.to).subscribe((res) => {
      console.log("available" + Object.values(res)[0]);
      if (Object.values(res)[0] == 'Not available') {
        alert(Object.values(res)[0]);
      }
    })
  }
}
