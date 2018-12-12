import { Component, OnInit } from '@angular/core';
import { Ticket } from "../../app/ticket";
import {TicketService} from "../../app/services/ticketService/ticket.service";
import {ConcertService} from "../../app/services/concertService/concert.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private concertService: ConcertService) { }

  ticketsArray: Ticket[];
  concertTitle: string;

  getTickets(): void {
    this.ticketService.getTickets()
      .subscribe(tickets => {
        this.ticketsArray = tickets;
        console.log(this.ticketsArray);
      })
  }

  ngOnInit() {
    this.getTickets();
  }

}
