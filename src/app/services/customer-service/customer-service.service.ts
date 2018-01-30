import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../../models/Customer';

@Injectable()
export class CustomerServiceService {

  private baseUrl = 'http://localhost:8080/rest-server/api/customers';

  constructor(private http: HttpClient) {
  }

  public getCustomerByPhoneNumber(phoneNumber: String): Observable<Customer> {
    let url: string = this.baseUrl + '/phone/' + phoneNumber;

    return this.http.get<Customer>(url);
  }
}
