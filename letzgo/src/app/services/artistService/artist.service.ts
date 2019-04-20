import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Artist} from "../../../artist";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

const token = localStorage.getItem("Token");

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Access-Token': token})
    }
  }

  getArtists(): Observable<Artist[]> {
    return this.http.get<any>('https://letzgo.herokuapp.com/api/artists', this.httpOptions).pipe(map (data => data))
  }

  getArtist(artistId: string): Observable<Artist> {
    return this.http.get<any>('https://letzgo.herokuapp.com/api/artists/' + artistId, this.httpOptions).pipe(map(data => data));
  }

  addArtist(name: string, imageUrl: string, genre: string, description: string){
    this.http.post<any>('https://letzgo.herokuapp.com/api/artists', {
      "name": name,
      "picture": imageUrl,
      "genre": genre,
      "description": description
    }, this.httpOptions)
  }

  deleteArtist(artistId: string) {
    this.http.delete<any>('' +
      '' + artistId, this.httpOptions);
  }
}
