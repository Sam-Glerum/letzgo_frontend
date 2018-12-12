import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Concert} from "../../concert";
import {map} from "rxjs/internal/operators";

const token = localStorage.getItem("Token");
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': token})
};

@Injectable({
  providedIn: 'root'
})

export class ConcertService {

  constructor(private http:HttpClient) { }

  // getConcerts(): Observable<Concert[]> {
  //   return this.http.get<Concert[]>('https://letzgo.herokuapp.com/api/concerts', httpOptions).pipe(map (data => data))
  // }

  getConcerts(): Observable<any> {
    return this.http.get<Observable<any>>('https://letzgo.herokuapp.com/api/concerts', httpOptions).pipe(map (data => data))
  }

  // getConcert(concertId: string): Observable<Concert> {
  //   return this.http.get<Concert>('https://letzgo.herokuapp.com/api/concerts/' + concertId, httpOptions).pipe(map (data => data))
  // }
  getConcert(concertId: string): Observable<any> {
    return this.http.get<Observable<any>>('https://letzgo.herokuapp.com/api/concerts/' + concertId, httpOptions).pipe(map (data => data))
  }
}
