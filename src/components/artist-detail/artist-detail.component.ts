import { Component, OnInit } from '@angular/core';
import {Artist} from "../../artist";
import {ArtistService} from "../../app/services/artistService/artist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  artistId = '';

  constructor(private artistService: ArtistService, private route:ActivatedRoute) { }

  getArtistId() {
    this.route.params.subscribe(param => {
      this.artistId = param['id'];
    });
  }

  getArtist(): void {
    this.artistService.getArtist(this.artistId)
      .subscribe(artist => {
        this.artist = artist;
        console.log(artist);
      });
  }

  ngOnInit() {
    this.getArtistId();
    this.getArtist();
  }

}
