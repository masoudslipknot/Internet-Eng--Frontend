import {Component, OnInit} from '@angular/core';
import {MenuItemService} from '../../services/menu-item/menu-item.service';
import {MenuItem} from '../../models/MenuItem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  info = 'With 5% off';
  description = 'Enjoy and try the best delicious foods that can be found in the world';

  constructor(private menuItemService: MenuItemService) {
  }

  getMenuItems(): void {
    this.menuItemService.getAllMenuItems().subscribe(menuItems => {
      this.menuItems = menuItems;
    });

    console.log(this.menuItems);
  }

  ngOnInit() {
    this.getMenuItems();
  }

}
