import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { ConcertComponent } from './concert/concert.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArtistComponent } from './artist/artist.component';
import { TicketComponent } from './ticket/ticket.component';
import { ConcertDetailComponent } from './concert-detail/concert-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    LoginComponent,
    RegisterComponent,
    ArtistComponent,
    TicketComponent,
    ConcertDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
