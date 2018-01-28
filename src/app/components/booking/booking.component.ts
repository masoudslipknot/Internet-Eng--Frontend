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
  cutsomerid: string;
  date: string;
  time: string;
  checkresult: boolean;
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
    this.cutsomerid = (<HTMLInputElement>document.getElementById('customerid')).value;
    this.time = String((<HTMLInputElement>document.getElementById('time')).value);
    this.date = String((<HTMLInputElement>document.getElementById('date')).value)
    this.time = this.time.replace(':','');
    console.log(this.time);
    this.checkresult = this.checkstate;
    this.showsecond = true;

  }
  book(): void {
   this.reservidtoshow = true;
  }
}
