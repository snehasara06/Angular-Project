import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { FlightTableService } from '../Services/FlightTable/flight-table.service';
import { bookFlight } from './bookFlight';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  dob: Date = new Date();
  idType: string = '';
  gender: string = '';
  passportNo: string = '';
  mailId: string = '';
  phone: string = '';
  tableId: string | null = '';
  tempData: any = [];

  book = new bookFlight();

  constructor(
    private flightService: FlightServiceService,
    private flighttableService: FlightTableService,
    private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.tableId = id;
    });
    this.flighttableService.setFlightDetail = this.tableId;
  }
  onSubmit(bookFlight: NgForm) {
    this.tempData = bookFlight.value;
    this.flightService.setTempData = this.tempData
    this.router.navigate(['/flights/flightTable/bookFlight/flightSummary'])
  }
}


