import { Component, OnInit } from '@angular/core';
import { GetreservationService } from '../../services/getreservation.service';
import {Reservation} from '../../models/reservation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  testreservation: { category: String, id: number, price: number, imageurl: String, name: string }[];
  info= 'with 5% off';
  desription= 'enjoy and try the best delicious food that can be found in the world';
  classtype= 'First class';
  constructor(private getrese: GetreservationService) { }
  getreservation(): void {
    //this.getrese.getreservation().subscribe(reservation => this.testreservation = reservation);
    this.testreservation = this.getrese.getreservation();
    console.log(this.testreservation);
  }

  ngOnInit() {
    this.getreservation();
  }

}
