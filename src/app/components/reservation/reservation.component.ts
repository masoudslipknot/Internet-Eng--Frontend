import { Component, OnInit } from '@angular/core';

// models
import {OrderRequest} from '../../models/OrderRequest';
import {OrderItemPair} from '../../models/OrderItemPair';

// services
import {OrderService} from '../../services/order/order.service';
import {MenuItemService} from '../../services/menu-item/menu-item.service';
import {isUndefined} from 'util';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  currentval: string;
  andis: number;
  current: { id: number, price: number, imageurl: string, name: string };
  subtrack: { foodid: number, price: number, quntity: number, name: string }
    = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': 'masoud'};

  curnum: number;
  subtotal = 0;
  total = 0;
  taxplus = 0;
  curfood: { foodid: number, price: number, quntity: number, name: string }
    = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': 'masoud'};
  desription = 'Yummy!';
  info= 'with 5% off';
  testreservation: any[];
  chosenfood: { foodid: number, price: number, quntity: number, name: string }[] = [];


  // order submission
  orderSubmittedSuccessFully: boolean = false;

  constructor
  (private menuItemService: MenuItemService, private orderService: OrderService) {
  }

  getMenuItems(): void {
    this.menuItemService.getAllMenuItems().subscribe(reservation => {
      console.log(reservation);
      this.testreservation = reservation;
    });

  }

  ngOnInit() {
    this.getMenuItems();
  }

  addS(id: number): void {
    console.log('add');

    this.currentval = (<HTMLInputElement>document.getElementById('menu' + id)).value;
    this.curnum = Number(this.currentval) + 1;
    (<HTMLInputElement>document.getElementById('menu' + id)).value = String(this.curnum);
    this.current = this.testreservation.find(item => item.id === id);
    const asian: { foodid: number, price: number, quntity: number, name: string }
    = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': 'masoud'};
    asian.foodid = this.current.id;
    asian.price = this.current.price;
    asian.name = this.current.name;
    asian.quntity = this.curnum;
    this.curfood = this.chosenfood.find(item => item.foodid === id);
    if (this.curfood == null) {
      this.chosenfood.push(asian);
      this.subtotal = asian.quntity * asian.price;
    }else {
      this.total = this.total - this.subtotal;
      this.chosenfood.find(item => item.foodid === id).quntity = this.curnum;
      this.subtotal = this.chosenfood.find(item => item.foodid === id).quntity * this.chosenfood.find(item => item.foodid === id).price;
    }
     this.total = this.total + this.subtotal;
    this.taxplus = this.total + 20;
    console.log(this.current);
  }

  removeS(id: number): void {
    console.log('remove');
    this.currentval = (<HTMLInputElement>document.getElementById('menu' + id)).value;
    this.curnum = Number(this.currentval) - 1;
    if ( this.curnum < 0) {
      this.curnum = 0;
    }

      (<HTMLInputElement>document.getElementById('menu' + id)).value = String(this.curnum);
    this.subtrack = this.chosenfood.find(item => item.foodid === id);
    this.andis = this.chosenfood.indexOf(this.subtrack);
    if (this.subtrack.quntity !== 0) {
      this.subtrack.quntity = this.subtrack.quntity - 1;
      this.subtotal = 1 * this.subtrack.price;
      this.total = this.total - this.subtotal;
      this.taxplus = this.total + 20;
    }
    if (this.subtrack.quntity === 0 ) {
      this.chosenfood.splice(this.andis, 1);
    }
  }

  submitOrder(): void {
    let i = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': ''};
    let orderReq: OrderRequest = new OrderRequest;

    let resId = this.currentval = (<HTMLInputElement>document.getElementById('ResId')).value;

    orderReq.reservationId = +resId;


    for (i in this.chosenfood) {
      console.log();
      let temp = this.chosenfood[i];

      let orderItemPair: OrderItemPair = new OrderItemPair();

      orderItemPair.number = temp.quntity;
      orderItemPair.name = temp.name;

      orderReq.orderedItems.push(orderItemPair);
    }

    console.log('REQ');
    console.log(orderReq);

    this.orderService.bookTable(orderReq).subscribe(res => {
      console.log(res);

      if (!isUndefined(res.orderId)) {
        this.orderSubmittedSuccessFully = true;
      }

    });
  }

}
