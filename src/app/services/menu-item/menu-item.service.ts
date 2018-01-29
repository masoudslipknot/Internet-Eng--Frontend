import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../../models/MenuItem';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MenuItemService {

  private baseUrl = 'http://localhost:8080/rest-server/api/menu';

  constructor(private http: HttpClient) { }

  public getAllMenuItems(): Observable<MenuItem[]> {
    let url: String = this.baseUrl ;
    return this.http.get<MenuItem[]>(url);
  }
}
