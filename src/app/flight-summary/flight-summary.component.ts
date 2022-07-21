import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/Data/data.service';
import { FlightTableService } from '../Services/FlightTable/flight-table.service';

@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.scss']
})
export class FlightSummaryComponent implements OnInit {
  firstName: any;
  lastName: any;

  departure: string = '';
  arrival: string = '';

  from: any;
  to: any;
  summaryForm: FormGroup | any;

  constructor(private fService: FlightServiceService,
    private formBuilder: FormBuilder,
    private flightTableService: FlightTableService) {

    this.summaryForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      today: new FormControl('', [Validators.required]),
      depart: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required]),
      bookDate: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.flightTableService.getFlightData(this.flightTableService.getFlightDetail).subscribe((res: any) => {
     
      this.summaryForm.patchValue({
        from: res['data'][0].From,
        to: res['data'][0].To
      })
    })
    
    this.summaryForm.patchValue({
      firstName: Object.values(this.fService.getTempData)[0],
      lastName: Object.values(this.fService.getTempData)[1],
      depart: Object.values(this.fService.getFlight)[3],
      arrival: Object.values(this.fService.getFlight)[4]
    })
  }
  saveTicket() {
    alert("Saved successfully!")
  }

}
