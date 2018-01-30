import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderRequest} from '../../models/OrderRequest';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  private baseUrl = 'http://localhost:8080/rest-server/api/orders/';

  constructor(private http: HttpClient) {
  }

  public bookTable(orderReq: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>(this.baseUrl, orderReq);
  }
}
