import {Customer} from './Customer';
import {Table} from './Table';
import {TimeSpan} from './TimeSpan';
/**
 * Created by navid on 1/29/18.
 */

export class Reservation {
  id: number;
  otherRequirements: string;
  relatedCustomer: Customer;
  relatedTable: Table;
  reservationDate: string;
  reservationTime: TimeSpan;
  submisssionDate: string;
}
