import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  ContactInfo= 'Contact Info';
  coffe= 'assets/coffee.png';
  glass= 'assets/glass.png';
  meat= 'assets/meat.png';
  reservationform= 'reservation form';
  address= '555 Love street Torento';
  tel= '(123) 465-6789';
  gmail= 'masouderfani1498@gmail.com';
  constructor() { }

  ngOnInit() {
  }
}
