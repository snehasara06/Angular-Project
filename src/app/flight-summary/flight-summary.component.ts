import { Component, OnInit } from '@angular/core';
import { Flight } from '../Models/flight';
import { FlightServiceService } from '../Services/Flight/flight-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/Data/data.service';

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


  summaForm: FormGroup | any;
  constructor(private fService: FlightServiceService,
    private formBuilder: FormBuilder,
    private router: Router, private acRoute: ActivatedRoute,
    private dataService: DataService) {
    this.summaForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to:new FormControl('',[Validators.required]),
      today:new FormControl('',[Validators.required]),
      depart:new FormControl('',[Validators.required]),
      arrival:new FormControl('',[Validators.required]),
      bookDate:new FormControl('',[Validators.required])

    })
  }
  // currentDate = new Date();
  // today = this.currentDate.getDate();

  ngOnInit(): void {

    console.log("Tempdata: " + Object.entries(this.fService.getTempData));
    console.log("destiny: " + Object.values(this.fService.getTempData)[0]);
    this.summaForm.patchValue({
      firstName: Object.values(this.fService.getTempData)[0],
      lastName: Object.values(this.fService.getTempData)[1],
      from: Object.values(this.fService.getFlight)[5],
      to:Object.values(this.fService.getFlight)[6],

    })
    console.log("FlightData: " + Object.entries(this.fService.getFlight));
    console.log("FROM: " + Object.values(this.fService.getFlight)[5])
    // console.log("Flight To: "+Object.entries(this.fService.getFlight[0]))
  }

  save(summaForm: FormControl) {
    console.log(summaForm.value)
    this.dataService.postFlight(summaForm.value).subscribe(
      res => {
        console.log("Saved successfully")
        alert("Ticket saved !")
      }
    )
  }

}
