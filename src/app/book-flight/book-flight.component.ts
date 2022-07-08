import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../Models/flight';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { bookFlight } from './bookFlight';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  form: number = 0;

  firstName: string = '';
  lastName: string = '';
  dob: Date = new Date();
  idType: string = '';
  gender: string = '';
  passportNo: string = '';
  mailId: string = '';
  phone: string = '';
  tempData: any = [];
  book = new bookFlight();

  constructor(
    private flightService: FlightServiceService,
    private router: Router,

  ) { }
  ngOnInit(): void { }
  toggle() {
    this.form++;
    console.log(this.form)
  }
  resetForm(form: NgForm) {
    console.log("Reset form");
    if (form)
      form.reset();

  }
  onSubmit(bookFlight: NgForm) {
    console.log(bookFlight.value)
    this.tempData = bookFlight.value;
    this.flightService.setTempData = this.tempData
    console.log(this.tempData.firstName);

    this.router.navigate(['/flights/flightTable/bookFlight/flightSummary'])
  }
}
