import { Component, OnInit } from '@angular/core';
import { GetreservationService } from '../../services/getreservation.service';
import {MenuItemComponent} from '../menu-item/menu-item.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  currentval: String;
  curentquntity: number;
  andis: number;
  current: { id: number, price: number, imageurl: String, name: string };
  subtrack: { foodid: number, price: number, quntity: number, name: String }
    = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': 'masoud'};
  curnum: number;
  subtotal = 0;
  total = 0;
  taxplus = 0;
   curfood: { foodid: number, price: number, quntity: number, name: String }
    = {'foodid': 0, 'price': 0, 'quntity': 0, 'name': 'masoud'};
  desription= 'enjoy and try the best delicious food that can be found in the world';
  classtype= 'First class';
  add= '+';
  remove= '-';
  info= 'with 5% off';
  testreservation: { id: number, price: number, imageurl: String, name: string }[];
  chosenfood: { foodid: number, price: number, quntity: number, name: String }[] = [];
  constructor(private getrese: GetreservationService) { }

  getreservation(): void {
    this.testreservation = this.getrese.getreservation();
    console.log(this.testreservation);
  }

  ngOnInit() {
    this.getreservation();
  }

  addS(id: number): void {
    console.log('add');

    this.currentval = (<HTMLInputElement>document.getElementById('menu' + id)).value;
    this.curnum = Number(this.currentval) + 1;
    (<HTMLInputElement>document.getElementById('menu' + id)).value = String(this.curnum);
    this.current = this.testreservation.find(item => item.id === id);
    const asian: { foodid: number, price: number, quntity: number, name: String }
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

}
