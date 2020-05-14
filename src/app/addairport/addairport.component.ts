import { Component, OnInit } from '@angular/core';
import { Airport } from '../class/airport';
import { AirportService } from '../service/airport.service';

@Component({
  selector: 'app-addairport',
  templateUrl: './addairport.component.html',
  styleUrls: ['./addairport.component.css']
})
export class AddairportComponent implements OnInit {

  title='addairport'
  airport:Airport=new Airport();
  constructor(private airportService:AirportService) { }

  ngOnInit(): void {
  }

  addAirport():void{
    this.airportService.addAirport(this.airport).subscribe(data=>
      {
        alert("Airport added");
      },
      error=>
      {
      console.log("error occured",error);
      }
      );
  }

}
