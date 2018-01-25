import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { GetreservationService } from '../app/services/getreservation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ReservationComponent,
    BookingComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanDeactivateGuard, GetreservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
