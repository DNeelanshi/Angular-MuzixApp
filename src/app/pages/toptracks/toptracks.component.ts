import { Component, OnInit } from '@angular/core';
import {TrackService} from '../../providers/track.service';
import {Track} from '../../track';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-toptracks',
  templateUrl: './toptracks.component.html',
  styleUrls: ['./toptracks.component.css']
})
export class ToptracksComponent implements OnInit {

  public tracks:any={};
  public msg='';
  public breakpoint=0;
  private trackarr:Track;
  public favstatus=false;
  private url = "http://localhost:8080/api/v1/track";
  constructor(private trackservice:TrackService,
    private http:HttpClient){

    this.trackservice.gettoptracks().subscribe(data => this.tracks = data);
    console.log(this.tracks);

  }
  
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
}

addtofav(track,index){
  console.log(track);
  console.log(index)
  this.favstatus = true;
  var date = new Date().getTime();
  var finalid = date.toString();
  var idd = finalid.substr(1, 8);
  var demo;
  
     this.trackservice.addfav(track,idd).subscribe(data=>demo=data);
   console.log("subscribed data:",demo);
   alert('added to wishlist');
}



}
