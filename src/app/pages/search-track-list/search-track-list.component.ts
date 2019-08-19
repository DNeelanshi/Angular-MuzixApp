import { Component, OnInit ,Input} from '@angular/core';
import { SwiperOptions } from 'swiper';
import {TrackService} from '../../providers/track.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search-track-list',
  templateUrl: './search-track-list.component.html',
  styleUrls: ['./search-track-list.component.css'],
  
})

export class SearchTrackListComponent implements OnInit {

  images:string[];
public tracks=[];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
  };
  constructor(private trackservice:TrackService,private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(name);
    if(name != ''){   
        this.trackservice.getSearch(name).subscribe(data => this.tracks = data);
        console.log(this.tracks);
    }
   
    console.log(this.tracks);


  }
  addtofav(track,index){
    console.log(track);
    var date = new Date().getTime();
    var finalid = date.toString();
    var idd = finalid.substr(1, 8);
    var demo;
    
     this.trackservice.addfavserach(track,idd).subscribe(data=>demo=data);
     console.log("subscribed data:",demo);
   
  }
 
}
