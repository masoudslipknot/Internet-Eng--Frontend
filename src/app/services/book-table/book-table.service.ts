import { Injectable } from '@angular/core';
import {CheckRequest} from '../../models/CheckRequest';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../../models/Reservation';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookTableService {
  private url = 'http://localhost:8080/rest-server/api/reserve';

  constructor(private http: HttpClient) { }

  public bookTable(checkReq: CheckRequest): Observable<Reservation> {
    return this.http.post<Reservation>(this.url, checkReq);
  }
}
