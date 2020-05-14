import { Component, OnInit } from '@angular/core';
import { Airport } from '../class/airport';
import { AirportService } from '../service/airport.service';

@Component({
  selector: 'app-viewallairport',
  templateUrl: './viewallairport.component.html',
  styleUrls: ['./viewallairport.component.css']
})
export class ViewallairportComponent implements OnInit {

  airports: Airport[] = [];
  airport: Airport = new Airport();

  setAirports: any;

  constructor(private airportService: AirportService) { }

  ngOnInit(){
    this.airportService.viewAllAirport().subscribe(data=>{
      console.log(data)
      
      this.airports=data});
  }

}
