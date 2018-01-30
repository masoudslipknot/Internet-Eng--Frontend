/**
 * Created by navid on 1/30/18.
 */
import {OrderItemPair} from './OrderItemPair';
export class OrderRequest {
  orderId: number;
  reservationId: number;
  orderedItems: OrderItemPair[] = [];
}
