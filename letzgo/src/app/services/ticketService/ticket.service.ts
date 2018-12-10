import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import { TicketComponent } from "../../../components/ticket/ticket.component";
import {Ticket} from "../../ticket";
import {map} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDQ2NDQ3ODQsImlhdCI6MTU0NDIxMjc4NCwic3ViIjoiamltc3dlZXdlZGRtIn0.DezLbFTig-U--aizVx2lNNcO8RyZbHX5YlpVoY_ExsY'})
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>("https://letzgo.herokuapp.com/api/tickets", httpOptions).pipe(map (data => data))
  }
}
