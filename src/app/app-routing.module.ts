import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { FlightsComponent } from './flights/flights.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VacayComponent } from './vacay/vacay.component';
import { HomeComponent } from './home/home.component';
import { FlightSummaryComponent } from './flight-summary/flight-summary.component';
import { FlightTableComponent } from './flight-table/flight-table.component';
import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vacay', component: VacayComponent, canActivate: [AuthGuardGuard] },
  { path: 'flights', component: FlightsComponent, canActivate: [AuthGuardGuard] },
  { path: 'flights/flightTable', component: FlightTableComponent, canActivate: [AuthGuardGuard] },
  { path: 'flights/flightTable/bookFlight', component: BookFlightComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'flights',
    children: [{
      path: 'flightTable',
      children: [{
        path: 'bookFlight',
        children: [{
          path: 'flightSummary',
          component: FlightSummaryComponent,
          canActivate: [AuthGuardGuard]
        }]
      }]
    }]
  },
  { path: 'flights/flightTable/bookFlight/:id', component: BookFlightComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
