import { Component, OnInit } from '@angular/core';
import {ChecktableService} from '../../services/checktable.service';
import {ReserveService} from '../../services/reserve.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  checkstate: boolean;
  reservidtoshow: boolean;
  reserid: number;
  showsecond = false;
  ContactInfo= 'Contact Info';
  checkresult: boolean;
  coffe= 'assets/coffee.png';
  glass= 'assets/glass.png';
  meat= 'assets/meat.png';
  reservationform= 'reservation form';
  address= '555 Love street Torento';
  tel= '(123) 465-6789';
  gmail= 'masouderfani1498@gmail.com';
  constructor(private bookingComponent: ChecktableService, private  reserservice: ReserveService) { }
  getchecktable(): void {
    this.checkstate = this.bookingComponent.getcheckstatus();

  }
  getreservationid(): void {
    this.reserid = this.reserservice.getreservationid();

  }
  ngOnInit() {
    this.getchecktable();
    this.getreservationid();
    console.log(this.checkstate);
  }
  checkavailability(): void {
    this.checkresult = this.checkstate;
    this.showsecond = true;

  }
  book(): void {
   this.reservidtoshow = true;
  }
}
