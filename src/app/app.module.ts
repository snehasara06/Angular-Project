import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VacayComponent } from './vacay/vacay.component';
import { FlightsComponent } from './flights/flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainComponent } from './train/train.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BusComponent } from './bus/bus.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';
import { FlightSummaryComponent } from './flight-summary/flight-summary.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlightTableComponent } from './flight-table/flight-table.component'

import { AuthGuardGuard } from './auth-guard.guard';
import { TokenInterceptorService } from './Services/TokenInterceptor/token-interceptor.service';
import { AuthService } from './Services/Auth/auth.service';


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
    FlightSummaryComponent,
    FlightTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
    AuthGuardGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
