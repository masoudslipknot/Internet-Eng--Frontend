import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CheckRequest } from '../../models/CheckRequest';
import { Table } from '../../models/Table';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CheckTableService {
  private url = 'http://localhost:8080/rest-server/api/reserve/check';

  constructor(private http: HttpClient) { }

  public checkForAvailableTable(checkReq: CheckRequest): Observable<Table> {
    return this.http.put<Table>(this.url, checkReq);
  }

}
