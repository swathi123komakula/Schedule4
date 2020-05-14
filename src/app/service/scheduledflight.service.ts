import { Injectable } from '@angular/core';
import { Scheduledflight } from '../class/scheduledflight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledflightService {
  [x: string]: any;
  
  scheduledflight:Scheduledflight[]=[];
  
  constructor(private http:HttpClient) { }

  public addScheduledFlight(scheduledflight:Scheduledflight):Observable<any>
  {
    return this.http.post("http://localhost:1139/scheduledFlight/add",scheduledflight,{responseType:'text'});
  }

  public viewScheduledFlight():Observable<any>
  {
    return this.http.get("http://localhost:1139/scheduledFlight");
  }

  public viewScheduledFlightid(flightNumber:number):Observable<any>
  {
    return this.http.get("http://localhost:1139/scheduledFlight"+flightNumber);
  }
  
}
