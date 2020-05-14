import { Component, OnInit } from '@angular/core';
import { ScheduledflightService } from '../service/scheduledflight.service';
import { Scheduledflight } from '../class/scheduledflight';

@Component({
  selector: 'app-search-scheduled-flight',
  templateUrl: './search-scheduled-flight.component.html',
  styleUrls: ['./search-scheduled-flight.component.css']
})
export class SearchScheduledFlightComponent implements OnInit {

  scheduledflight:Scheduledflight[]=[];
  flightno:number;
  n:boolean=false;
  constructor(private scheduledService:ScheduledflightService) { }

  ngOnInit(): void {
   
  }
  searchScheduledFlightId():void{
    this.scheduledService.viewScheduledFlightid(this.flightno)
    .subscribe(data=>this.scheduledflight.push(data),
    error=>
    {
      console.log("error occured",error);
      alert("flight number does not exist");  
    }
    );
    this.n=true;
     this.scheduledflight.pop();

  }
}
