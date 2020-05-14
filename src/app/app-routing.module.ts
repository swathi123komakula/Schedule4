import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddairportComponent } from './addairport/addairport.component';
import { ViewallairportComponent } from './viewallairport/viewallairport.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewscheduledFlightsComponent } from './viewscheduled-flights/viewscheduled-flights.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'searchscheduledflight',component:SearchScheduledFlightComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'addairport',component:AddairportComponent},
  {path:'viewallairport',component:ViewallairportComponent},
  {path:'addScheduledFlight',component:AddScheduledFlightComponent},
  {path:'viewScheduledFlights',component:ViewscheduledFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
