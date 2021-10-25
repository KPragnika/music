import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements OnInit {

  public searchQuery:string=null;
public artists;
  constructor(private _spotifyService:SpotifyService) { }


  ngOnInit(): void {
  }
  public searchArtists(){
    this._spotifyService.getAllArtists(this.searchQuery).subscribe({
      next:(data) => {
        this.artists=data.artists.items;
        console.log("ccccc");
      }
    }
      
    );
  }

}
