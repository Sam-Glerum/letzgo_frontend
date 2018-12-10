import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component import
import { ConcertComponent } from "./concert/concert.component";
import { ConcertDetailComponent } from "./concert-detail/concert-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ArtistComponent } from "./artist/artist.component";
import { TicketComponent } from "./ticket/ticket.component";


const routes: Routes = [
  {path: 'concerts', component: ConcertComponent},
  {path: 'concertDetail/:id', component: ConcertDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'artists', component: ArtistComponent},
  {path: 'tickets', component: TicketComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
