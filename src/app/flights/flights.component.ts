import { Component, OnInit } from '@angular/core';
import { DropDownlist } from '../Models/DropDownList/drop-downlist';
import { DropDownService } from '../Services/DropDown/drop-down.service';
import { FlightServiceService } from '../Services/Flight/flight-service.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  depart: string = '';
  arrive: string = '';

  constructor(
    private fService: FlightServiceService, 
    public dropDownService: DropDownService) { }
public arrayDrop:any=[];
  ngOnInit(): void {
    this.fService.flightData=this.depart;
    console.log(this.fService.fData)

    this.dropDownService.getDropDown().subscribe((res) => {
      this.dropDownService.dropDown = res as DropDownlist[];
      this.arrayDrop=res;
      // console.log(this.arrayDrop);
      
    })
  }
  
  onSubmit() {
    this.fService.flightData = this.depart;
    // this.fService.flightData = this.arrive;

  }


}
