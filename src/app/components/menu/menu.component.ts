import {Component, OnInit} from '@angular/core';
import {GetreservationService} from '../../services/getreservation.service';
import {MenuItem} from '../../models/MenuItem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  info = 'with 5% off';
  description = 'enjoy and try the best delicious food that can be found in the world';

  constructor(private getrese: GetreservationService) {
  }

  getMenuItems(): void {
    this.getrese.getMenu().subscribe(menuItems => {
      console.log('Hello2!');
      this.menuItems = menuItems;
    });

    console.log(this.menuItems);
  }

  ngOnInit() {
    this.getMenuItems();
  }

}
