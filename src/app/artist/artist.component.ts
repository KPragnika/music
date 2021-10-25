import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
public artistId:string;
public artist:any;
public albums:any;
  constructor(private _activatedRoute:ActivatedRoute,private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({next:(paramMap:ParamMap)=>{
      this.artistId=paramMap.get('id')
    }})
    //get artist from the service

    this._spotifyService.getArtist(this.artistId).subscribe({
      next:(data)=>{
        this.artist=data;
      }
    })
    //get album data
    this._spotifyService.getAllAlbums(this.artistId).subscribe({
      next:(data)=>{
        this.albums=data.items;
      }
    })
  }



}