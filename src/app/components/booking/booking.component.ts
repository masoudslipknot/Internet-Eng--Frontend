import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


// services
import { ChecktableService} from '../../services/checktable.service';
import { ReserveService} from '../../services/reserve.service';
import { CheckTableService } from '../../services/check-table/check-table.service';
import { GetcustomeridService } from '../../services/getcustomerid.service';
import { BookTableService } from '../../services/book-table/book-table.service';
import { CustomerServiceService } from '../../services/customer-service/customer-service.service'


// models
import { Customer } from '../../models/Customer';
import { CheckRequest } from '../../models/CheckRequest';
import { TimeSpan } from '../../models/TimeSpan';
import { Reservation } from '../../models/Reservation';

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
  customernum: number;
  partysize: number;
  checkresult: boolean;
  phonenumber: number;
  customercheck: boolean;

  // TODO: show this on the UI side
  reservation: Reservation;

  // TODO: show customer when fetched by phone number
  fetchedCustomerInfo: Customer;

  constructor(private csService: CustomerServiceService,
              private bookTable: BookTableService,
              private checkTableAvailability: CheckTableService,
              private reserservice: ReserveService,
              private customer: GetcustomeridService,
              private http: HttpClient) { }


  getreservationid(): void {
    this.reserid = this.reserservice.getreservationid();

  }

  getcustomerid() {
    this.customernum = this.customer.getcustomerid();
  }

  ngOnInit() {
    this.getreservationid();
    this.getcustomerid();
    console.log(this.checkstate);
  }

  private extractCheckRequest(): CheckRequest {

    let csId = (<HTMLInputElement>document.getElementById('customerid')).value;
    let time = String((<HTMLInputElement>document.getElementById('time')).value);
    let date = String((<HTMLInputElement>document.getElementById('date')).value);
    let numberOfSeats = Number((<HTMLInputElement>document.getElementById('partysize')).value);

    let startTime = time.replace(':', '');
    let endTime = +startTime + 200;
    let ts:TimeSpan = new TimeSpan();
    ts.start = startTime;
    ts.end = "" + endTime;

    let cs:Customer = new Customer;
    cs.id = +csId;

    console.log(this.partysize);

    this.checkresult = this.checkstate;
    this.showsecond = true;
    const checkReq = new CheckRequest();

    checkReq.ts = ts;
    checkReq.numberOfSeats = numberOfSeats;
    checkReq.relatedCustomer = {customerId: +csId};
    checkReq.date = date;

    return checkReq;
  }

  checkAvailability(): void {

    let checkReq: CheckRequest = this.extractCheckRequest();

    this.checkTableAvailability.checkForAvailableTable(checkReq).subscribe( response => {
      console.log(response);
      this.checkstate = true;
    });
  }

  getID(): void {
    console.log(this.customernum);
    this.customercheck = true;
  }

  book(): void {
    let checkReq: CheckRequest = this.extractCheckRequest();

    this.bookTable.bookTable(checkReq).subscribe( response => {
      console.log(response);
      this.reservation = response;
    });

  }

  getCustomerByPhone() {
    let phoneNumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;

    this.csService.getCustomerByPhoneNumber(phoneNumber).subscribe( res => {
      console.log(res);
      this.fetchedCustomerInfo = res;
    })
  }
}

