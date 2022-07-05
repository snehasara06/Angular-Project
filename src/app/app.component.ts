import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './Services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Odyssey';
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.getDataFromAPI();
  }
  // getDataFromAPI() {
  //   this.service.getData().subscribe((res) => {
  //     console.log('Response from API is  ', res)
  //   }, (error:any) => {

  //   })
  // }

}
