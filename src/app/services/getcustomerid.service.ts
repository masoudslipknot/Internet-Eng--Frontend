import { Injectable } from '@angular/core';
import {Customer} from '../models/Customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetcustomeridService {
  customerid= 2555;
  customerUrl: string;
  constructor(private http: HttpClient) { }
  getcustomerid() {
    //this.http.get<Customer[]>(this.customerUrl);
    return this.customerid;
  }

}
