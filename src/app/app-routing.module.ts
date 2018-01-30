import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {BookingComponent} from './components/booking/booking.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {MenuComponent} from './components/menu/menu.component';
import {AdminpanelComponent} from './components/adminpanel/adminpanel.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'Adamin', component: AdminpanelComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}

