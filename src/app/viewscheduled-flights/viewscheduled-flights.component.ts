import { Component, OnInit } from '@angular/core';
import { Scheduledflight } from '../class/scheduledflight';
import { ScheduledflightService } from '../service/scheduledflight.service';

@Component({
  selector: 'app-viewscheduled-flights',
  templateUrl: './viewscheduled-flights.component.html',
  styleUrls: ['./viewscheduled-flights.component.css']
})
export class ViewscheduledFlightsComponent implements OnInit {


  scheduledflights: Scheduledflight[] = [];
  seheduledflight:Scheduledflight = new Scheduledflight();
  flightNumber:number;

  constructor(private scheduledFlightService : ScheduledflightService) { }

  ngOnInit(): void {
    this.scheduledFlightService.viewScheduledFlight().subscribe(data=>this.scheduledflights=data);
  
  }
  deleteScheduledFlight()
  {
    this.scheduledFlightService.deleteScheduledFlight(this.flightNumber).subscribe(data=>this.seheduledflight=data);
  }
 

}
