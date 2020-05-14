import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddairportComponent } from './addairport/addairport.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ViewallairportComponent } from './viewallairport/viewallairport.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ViewscheduledFlightsComponent } from './viewscheduled-flights/viewscheduled-flights.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    AddairportComponent,
    ViewallairportComponent,
    WelcomeComponent,
    FooterComponent,
    ViewscheduledFlightsComponent,
    AddScheduledFlightComponent,
    SearchScheduledFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
