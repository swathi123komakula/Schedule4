import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../class/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  constructor(private http:HttpClient) { }

  public viewAllFlight():Observable<any>{
    return this.http.get("http://localhost:1139/flight");
  }
  public viewFlight(flightNumber:string):Observable<any>{
     console.log("flightnumber : ",flightNumber);
    let url="http://localhost:1139/flight/"+flightNumber;
    return this.http.get(url);
  }
}
