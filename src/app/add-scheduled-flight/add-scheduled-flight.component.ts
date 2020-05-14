import { Component, OnInit } from '@angular/core';
import { ScheduledflightService } from '../service/scheduledflight.service';
import { Flight } from '../class/flight';
import { Scheduledflight } from '../class/scheduledflight';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  title='scheduling flight'
  scheduledflight:Scheduledflight=new Scheduledflight();
  flightno:string="200";
  sf:boolean=false;
  
  flight:Flight=new Flight();
  flightdet:Flight=new Flight();
  
  flightarr: Flight[]=[];
  scheduleno:string;
    constructor(private scheduledFlightsService:ScheduledflightService,private flightService:FlightService) { }
  
    ngOnInit(): void {
      
    }
  
  scheduleFlight():void{
    this.scheduledflight.flight.flightNumber=this.flightno;
    this.scheduledFlightsService.addScheduledFlight(this.scheduledflight).subscribe(data=>
    {
      alert("flight scheduled successfully");
    },
    error=>
    {
      console.log("error occured",error);
    }
    )
  }
  action()
  {
    this.viewFlight();
  }
  
  viewFlight():void{
     
      console.log("value djflight",this.flightno);
     this.flightService.viewFlight(this.flightno)
     .subscribe(data=>this.flightarr.push(data)
       ,
       error=>
       {
         console.log("error occured",error);
       }
       );
       this.sf=true;
   }
  
}
