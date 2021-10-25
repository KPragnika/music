import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
//public key='Bearer BQDCsHGMFcL3z-AdznDK5OF1P6dRtQzYQGctsQwukzEVn3QHt2M1K6JOEFFa87ZXVCsmTn5BNRkI9h7eHXOayM46ggQLFOMbA2BLz3Vv9ByaZYwpwCKPENrkaO_gvPtdxPXWavvp_QJbEz96Q8kYcsoeJoWLPnA'
public key='Bearer BQDtj4zxi0x31CfUxhyLlteNFbisY82F-m23Q3wUq-cyvcvtw_AZAI_V4U2gBGYwuLCEmc2rHRbyWUiDYMrMwoNNMqZ57iQADky9VlH405LIASerL3qjpavDBmYw0sEdtLt2bg-xplkkh6c4h9L-vHcq13b2aK8'
/*private httpOptions={
  headers : new HttpHeaders(
    this.header({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':this.key
  })
  )};*/
  public headers={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':this.key
  };

constructor(private _httpClient:HttpClient) { }
//get all artists
  public getAllArtists(searchQuery):Observable<any>{
    /*const headers={
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':this.key
    };*/
let artistURL=`https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`
    return this._httpClient.get(artistURL,{headers:this.headers});
      
    
    };
//get an artist
public getArtist(artistId):Observable<any>{
  let artistURL=`https://api.spotify.com/v1/artists/${artistId}`;
  return this._httpClient.get<any>(artistURL,{headers:this.headers})
}
//get albums

public getAllAlbums(artistId):Observable<any>{
  let albumURL=`https://api.spotify.com/v1/artists/${artistId}/albums`;
  return this._httpClient.get<any>(albumURL,{headers:this.headers})
}
//get single album
public getAlbum(albumId):Observable<any>{
  let albumURL=`https://api.spotify.com/v1/albums/${albumId}`;
  return this._httpClient.get<any>(albumURL,{headers:this.headers})
}
//get all tracks
public getAllTracks(albumId):Observable<any>{
  let tracksURL=`https://api.spotify.com/v1/albums/${albumId}/tracks`;
  return this._httpClient.get<any>(tracksURL,{headers:this.headers})
}


  }



