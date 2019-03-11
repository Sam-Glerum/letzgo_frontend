import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Artist} from "../../../artist";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

const token = localStorage.getItem("Token");

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': token})
};

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<any[]>('https://letzgo.herokuapp.com/api/artists', httpOptions).pipe(map (data => data))
  }

  getArtist(artistId: string): Observable<Artist> {
    return this.http.get<any>('https://letzgo.herokuapp.com/api/artists/' + artistId, httpOptions).pipe(map(data => data));
  }

  addArtist(name: string, imageUrl: string, genre: string, description: string){
    this.http.post<any>('https://letzgo.herokuapp.com/api/artists', {
      "name": name,
      "picture": imageUrl,
      "genre": genre,
      "description": description
    }, httpOptions)
  }

  deleteArtist(artistId: string) {
    this.http.delete<any>('https://letzgo.herokuapp.com/api/artists/' + artistId, httpOptions);
  }
}
