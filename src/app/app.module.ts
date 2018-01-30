// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';

// Services
import {GetreservationService} from '../app/services/getreservation.service';
import {CheckTableService} from './services/check-table/check-table.service';
import { ReserveService } from './services/reserve.service';
import {GetcustomeridService} from './services/getcustomerid.service';
import {BookTableService} from './services/book-table/book-table.service';
import {CustomerServiceService} from './services/customer-service/customer-service.service';
import {MenuItemService} from './services/menu-item/menu-item.service';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ReservationComponent,
    BookingComponent,
    MenuComponent,
    AdminpanelComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [
    CustomerServiceService,
    BookTableService,
    GetreservationService,
    CheckTableService,
    ReserveService,
    GetcustomeridService,
    MenuItemService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
