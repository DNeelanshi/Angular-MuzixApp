import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpParams} from  "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {TrackService} from '../../providers/track.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.css'],
})
export class SearchTrackComponent implements OnInit {

  public tracks=[];
  public seracharr=[];
  customersObservable : Observable<any>;

  constructor(private trackservice:TrackService,
   private httpclient:HttpClient,
   private router:Router ) { }

  ngOnInit() {
  }
  submit(val){
    let name = val;
    this.router.navigateByUrl('/playlist', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/searchlist',name])); 
  }

}
