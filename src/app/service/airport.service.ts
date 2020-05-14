import { Injectable } from '@angular/core';
import { Airport } from '../class/airport';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  airport:Airport[]=[];

  constructor(private http:HttpClient) { }

  public addAirport(airport:Airport):Observable<any>{
    return this.http.post("http://localhost:1139/airport/add",airport,{responseType:'text'});
  }

  public viewAllAirport():Observable<any>{
    return this.http.get("http://localhost:1139/airport");
  }

}
