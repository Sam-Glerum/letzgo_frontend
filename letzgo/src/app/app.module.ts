import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { ConcertComponent } from '../components/concert/concert.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { TicketComponent } from '../components/ticket/ticket.component';
import { ConcertDetailComponent } from '../components/concert-detail/concert-detail.component';
import { ArtistDetailComponent } from '../components/artist-detail/artist-detail.component';
import { LoginDetailComponent } from '../components/login-detail/login-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    LoginComponent,
    RegisterComponent,
    ArtistComponent,
    TicketComponent,
    ConcertDetailComponent,
    ArtistDetailComponent,
    LoginDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
