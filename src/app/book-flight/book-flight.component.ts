import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.scss']
})
export class BookFlightComponent implements OnInit {
  form: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
this.form++;
console.log(this.form)
  }
}
