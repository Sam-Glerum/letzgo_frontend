import { Component, OnInit } from '@angular/core';
import { ConcertService } from "../concert.service";
import {Concert} from "../concert";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private concertService: ConcertService) {
  }
  concertsArray: Concert[];




  getHeroes(): void {
    this.concertService.getConcerts()
      .subscribe(concerts => {
        this.concertsArray = concerts;
        console.log(this.concertsArray);
      });
  }

  ngOnInit() {
    this.getHeroes();

  }

}
