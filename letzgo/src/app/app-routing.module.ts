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


const routes: Routes = [
  {path: 'concerts', component: ConcertComponent},
  {path: 'concertDetail/:id', component: ConcertDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'artistDetail/:id', component: ArtistDetailComponent},
  {path: 'tickets', component: TicketComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
