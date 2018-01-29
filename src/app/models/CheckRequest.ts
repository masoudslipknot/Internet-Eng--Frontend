import {Customer} from './Customer';
import {TimeSpan} from './TimeSpan';
/**
 * Created by navid on 1/29/18.
 */


export class CheckRequest {
  id: number;
  date: string;
  numberOfSeats: number;
  relatedCustomer: {customerId: number};
  ts: TimeSpan;
}
