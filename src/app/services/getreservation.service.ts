import { Injectable } from '@angular/core';

@Injectable()
export class GetreservationService {
  testreservation: {id: number, price: number, imageurl: String, name: string }[] = [
    {'id': 0, 'price': 0, 'imageurl': 'assets/res1.jpg', 'name': 'Available' },
    { 'id': 1, 'price': 1, 'imageurl': 'assets/res1.jpg', 'name': 'Ready' },
    { 'id': 2, 'price': 2, 'imageurl': 'assets/res1.jpg', 'name': 'Started' }
  ];
  constructor() { }

  getreservation() {
    return this.testreservation;
  }

}
