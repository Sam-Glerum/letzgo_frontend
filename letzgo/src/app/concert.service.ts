import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Concert} from "./concert";
import {map} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDQ2NDQ3ODQsImlhdCI6MTU0NDIxMjc4NCwic3ViIjoiamltc3dlZXdlZGRtIn0.DezLbFTig-U--aizVx2lNNcO8RyZbHX5YlpVoY_ExsY'})
};

@Injectable({
  providedIn: 'root'
})

export class ConcertService {

  constructor(private http:HttpClient) { }

  getConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>('https://letzgo.herokuapp.com/api/concerts', httpOptions).pipe(map (data => data))
  }
}
