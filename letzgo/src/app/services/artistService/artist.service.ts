import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Artist} from "../../../artist";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDQ2NDQ3ODQsImlhdCI6MTU0NDIxMjc4NCwic3ViIjoiamltc3dlZXdlZGRtIn0.DezLbFTig-U--aizVx2lNNcO8RyZbHX5YlpVoY_ExsY'})
};

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('https://letzgo.herokuapp.com/api/artists', httpOptions).pipe(map (data => data))
  }
}
