import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Reservation} from '../models/reservation';


@Injectable()
export class GetreservationService {
  private getreservationUrl = 'http://localhost:8080/rest-server/api/menu';
  reservations: { category: string, id: number, price: number, imageurl: string, name: string }[] = [
    {'category': 'FOOD', 'id': 0, 'price': 0, 'imageurl': 'assets/salad.jpg', 'name': 'Available' },
    { 'category': 'FOOD', 'id': 1, 'price': 1, 'imageurl': 'assets/res1.jpg', 'name': 'Ready' },
    { 'category': 'FOOD', 'id': 2, 'price': 2, 'imageurl': 'assets/res1.jpg', 'name': 'Started' }
  ];
  constructor(private http: HttpClient) { }

  getreservation() {
    //return this.http.get<Reservation[]>(this.getreservationUrl);
    return this.reservations;
  }

}
