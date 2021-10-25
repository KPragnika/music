import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
public albumId:string;
public album;
public tracks;
  constructor(private _activatedRoute:ActivatedRoute,private _spotifyService:SpotifyService,private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({next:(paramMap:ParamMap)=>{
      this.albumId=paramMap.get('id')
    }})

    //get album from service
    this._spotifyService.getAlbum(this.albumId).subscribe({
      next:(data)=>{
        this.album=data;
      }
    })
    //get all the tracks
    this._spotifyService.getAllTracks(this.albumId).subscribe({
      next:(data)=>{
        this.tracks=data.items;
      }
    })
  }
    //
    public backToArtists(){
      this._router.navigate([`/artists/${this.album.artists[0].id}`],{relativeTo:this._activatedRoute})
    }
  

}
