import { Component, OnInit } from '@angular/core';
import {ChecktableService} from '../../services/checktable.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  checkstate: boolean;
  ContactInfo= 'Contact Info';
  checkresult: boolean;
  coffe= 'assets/coffee.png';
  glass= 'assets/glass.png';
  meat= 'assets/meat.png';
  reservationform= 'reservation form';
  address= '555 Love street Torento';
  tel= '(123) 465-6789';
  gmail= 'masouderfani1498@gmail.com';
  constructor(private bookingComponent: ChecktableService) { }
  getchecktable(): void {
    this.checkstate = this.bookingComponent.getcheckstatus();

  }
  ngOnInit() {
    this.getchecktable();
    console.log(this.checkstate);
  }
  checkavailability(): void {
    this.checkresult = this.checkstate;

  }
}
