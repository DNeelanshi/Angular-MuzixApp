import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from '../track'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable()
export class TrackService {

    // public Track:any=[];
    private url = "http://localhost:8080/api/v1/track";
    private lastfmurl = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=90aaa37a824cb860430cb9851bdb7902&format=json";

    constructor(private http: HttpClient) {

    }


    gettoptracks(): Observable<Track[]> {
        return this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&limit=8&api_key=90aaa37a824cb860430cb9851bdb7902&format=json")
            .pipe(map(data => data.tracks.track));

    }
    getTrack(): Observable<Track[]> {

        return this.http.get<Track[]>(this.url);
    }
    getSearch(val): Observable<Track[]> {
        console.log(val)
        return this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + val + "&api_key=90aaa37a824cb860430cb9851bdb7902&format=json")
            .pipe(map(data => data.results.trackmatches.track));
    }
    addfavserach(trackk, id): Observable<any> {

        const body = new HttpParams()
            .set('id', id)
            .set('name', trackk.name)
            .set('comment', trackk.artist);

        return this.http.post(this.url,
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }
        );
    }

    addfav(trackk, id): Observable<any> {

        const body = new HttpParams()
            .set('id', id)
            .set('name', trackk.name)
            .set('comment', trackk.artist.name);

        return this.http.post(this.url,
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }
        );
    }
    //service to delete the track
    deletefavorite(id): Observable<any> {

        return this.http.delete<any>(this.url + "/" + id);
    }

    //service to update the track
    updatetrack(songname, artistname, id): Observable<any> {

        const body = new HttpParams()
            .set('id', id)
            .set('name', songname)
            .set('comment', artistname);

        return this.http.put(this.url + "/" + id,
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }
        );
    }
}