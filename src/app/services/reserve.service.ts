import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReserveService {
  reservationid = 9312430051;
  private reserveUrl = 'api/reserveUrl';

  constructor( private http: HttpClient) { }

  getreservationid() {
    return this.reservationid;
  }
}
