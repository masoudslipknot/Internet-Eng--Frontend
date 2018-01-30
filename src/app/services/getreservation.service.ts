import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MenuItem} from '../models/MenuItem';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GetreservationService {
  private url = 'http://localhost:8080/rest-server/api/menu';
  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<MenuItem[]>(this.url);
  }

}
