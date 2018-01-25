import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname= 'resturant app';
  home= 'HOME';
  resturant= 'Book a Table';
  reservation= 'Reservation';
  about= 'Menu';
  Login= 'Login';
  constructor(private  router: Router) { }
  navigate() {
    this.router.navigate(['reservation']);
  }



}
