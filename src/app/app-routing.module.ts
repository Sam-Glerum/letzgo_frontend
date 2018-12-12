import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component import
import { ConcertComponent } from "../components/concert/concert.component";
import { ConcertDetailComponent } from "../components/concert-detail/concert-detail.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { ArtistComponent } from "../components/artist/artist.component";
import { TicketComponent } from "../components/ticket/ticket.component";
import {ArtistDetailComponent} from "../components/artist-detail/artist-detail.component";
import {TicketdetailComponent} from "../components/ticketdetail/ticketdetail.component";
import { AuthenticationGuardService } from "./services/authenticationGuardService/authentication-guard.service";


const routes: Routes = [
  {path: 'concerts', component: ConcertComponent, canActivate: [AuthenticationGuardService]},
  {path: 'concertDetail/:id', component: ConcertDetailComponent, canActivate: [AuthenticationGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'artists', component: ArtistComponent, canActivate: [AuthenticationGuardService]},
  {path: 'artistDetail/:id', component: ArtistDetailComponent, canActivate: [AuthenticationGuardService]},
  {path: 'tickets', component: TicketComponent, canActivate: [AuthenticationGuardService]},
  {path: 'ticketDetail/:id', component: TicketdetailComponent, canActivate: [AuthenticationGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
