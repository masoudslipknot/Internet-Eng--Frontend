import {Customer} from './Customer';
import {Table} from './Table';
/**
 * Created by navid on 1/29/18.
 */

export class Reservation {
  id: number;
  otherRequirements: string;
  relatedCustomer: Customer;
  relatedTable: Table;
  reservationDate: string;
  submisssionDate: string;
}
