import { Airport } from './airport';

export class Schedule {
    scheduleId:number;
    sourceAirport:Airport;
    destinationAirport:Airport;
    arrivalDate:Date;
    departureDate:Date;
}
