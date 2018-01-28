import { Component, OnInit } from '@angular/core';
import {ChecktableService} from '../../services/checktable.service';
import {ReserveService} from '../../services/reserve.service';
import {GetcustomeridService} from '../../services/getcustomerid.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Table} from '../../models/Table';
import {Customer} from '../../models/Customer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  checkstate: boolean;
  reservidtoshow: boolean;
  reserid: number;
  customerid: number;
  showsecond = false;
  cutsomerid: string;
  customernum: number;
  partysize: number;
  date: string;
  time: string;
  checkresult: boolean;
  phonenumber: number;
  customercheck: boolean;
  tableurl: string;
  constructor(private bookingComponent: ChecktableService, private  reserservice: ReserveService,
              private customer: GetcustomeridService, private http: HttpClient) { }
  getchecktable(): void {
    this.checkstate = this.bookingComponent.getcheckstatus();

  }
  getreservationid(): void {
    this.reserid = this.reserservice.getreservationid();

  }
  getcustomerid() {
    this.customernum = this.customer.getcustomerid();

  }
  ngOnInit() {
    this.getchecktable();
    this.getreservationid();
    this.getcustomerid();
    console.log(this.checkstate);
  }
  checkavailability(): void {
    this.cutsomerid = (<HTMLInputElement>document.getElementById('customerid')).value;
    this.time = String((<HTMLInputElement>document.getElementById('time')).value);
    this.date = String((<HTMLInputElement>document.getElementById('date')).value);
    this.partysize = Number((<HTMLInputElement>document.getElementById('partysize')).value);
    this.time = this.time.replace(':', '');
    console.log(this.partysize);
    this.checkresult = this.checkstate;
    this.showsecond = true;
    const table = new Table();
    table.time = this.time;
    table.partysize = this.partysize;
    table.cutsomerid = this.cutsomerid;
    table.date = this.date;
    //this.http.post<Customer>(this.tableurl, table);

  }
  getID(): void {
    this.phonenumber = Number((<HTMLInputElement>document.getElementById('phonenumber')).value);
    console.log(this.customernum);
    this.customercheck = true;
   }
  book(): void {
   this.reservidtoshow = true;
  }
}

