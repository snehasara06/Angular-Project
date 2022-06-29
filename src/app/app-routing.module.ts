import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BusComponent } from './bus/bus.component';
import { FlightsComponent } from './flights/flights.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TrainComponent } from './train/train.component';
import { VacayComponent } from './vacay/vacay.component';
import { HomeComponent } from './home/home.component';
import { FlightSummaryComponent } from './flight-summary/flight-summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vacay', component: VacayComponent },
  { path: 'flights', component: FlightsComponent },
  {path: 'flights/bookFlight', component: BookFlightComponent},

  {
    path: 'flights',
    children: [
      {
        path: 'bookFlight',
        //component: BookFlightComponent,
        children: [
          {
            path: 'flightSummary',
            component: FlightSummaryComponent
          }
        ]
      }


    ]


  },

  { path: 'train', component: TrainComponent },
  { path: 'bus', component: BusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
