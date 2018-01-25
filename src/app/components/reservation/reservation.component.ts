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
  curnum: number;
  desription= 'enjoy and try the best delicious food that can be found in the world';
  classtype= 'First class';
  add= '+';
  remove= '-';
  info= 'with 5% off';
  testreservation: { id: number, price: number, imageurl: String, name: string }[];
  chosenfood: { id: number, foods: { id: number, price: number, name: string }[] };
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
  }

  removeS(id: number): void {
    console.log('remove');
    this.currentval = (<HTMLInputElement>document.getElementById('menu' + id)).value;
    this.curnum = Number(this.currentval) - 1;
    (<HTMLInputElement>document.getElementById('menu' + id)).value = String(this.curnum);

  }

}
