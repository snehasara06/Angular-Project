import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VacayComponent } from './vacay/vacay.component';
import { FlightsComponent } from './flights/flights.component';
import { FormsModule } from '@angular/forms';
import { TrainComponent } from './train/train.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BusComponent } from './bus/bus.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';
import { FlightSummaryComponent } from './flight-summary/flight-summary.component';

import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// import{MatStepperModule} from '@angular/material'
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VacayComponent,
    FlightsComponent,
    TrainComponent,
    NavigationComponent,
    BusComponent,
    BookFlightComponent,
    HomeComponent,
    FlightSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AngularFontAwesomeModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
