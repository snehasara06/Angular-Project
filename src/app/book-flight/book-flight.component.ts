import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from '../Models/flight';
// import { FlightServiceService } from '../Services/Flight/flight-service.service';
// import { PersonalDataService } from '../Services/PersonalData/personal-data.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  form: number = 0;
  constructor(
    // public personalService: PersonalDataService
    ) { }
  // newTicket!: Flight;
  ngOnInit(): void {
  }
  toggle() {
    this.form++;
    console.log(this.form)
  }
  resetForm(form?: NgForm) {
    console.log("Reset form");
    if (form)
      form.reset();
    // this.personalService.personalData = {
      // firstname: "",
      // lastname: "",
      // dob: "",
      // nationality: "",
      // idType: "",
      // passportNo: "",
      // passportDate: ""
    // }
  }
}
