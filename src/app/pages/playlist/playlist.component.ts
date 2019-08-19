import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../providers/track.service';
import { Router } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public tracks = [];
  public songname = '';
  public artistname = '';
  public editid = '';

  public breakpoint = 0;
  constructor(private trackservice: TrackService,
    private router: Router, public dialog: MatDialog) {
    this.getmyplaylist();

  }
  getmyplaylist() {

    this.trackservice.getTrack().subscribe(data => this.tracks = data);
    console.log(this.tracks);
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
  removetrack(item) {
    var succes = 'false'
    console.log(item.id)
    this.trackservice.deletefavorite(item.id).subscribe((data) => {
      succes = 'true';
      console.log("success");
    });
    console.log("success");
    alert('track deleted')
    window.location.reload();

  }
  openDialog(item): void {
    console.log(item)


    const dialogRef = this.dialog.open(UpdatedialogComponent, {
      width: '250px',
      data: { name: item.name, artist: item.comment }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result == undefined || result.name =="" || result.artist =="") { } else {
        this.songname = result.name;
        this.artistname = result.artist;
        this.editid = item.id;
        this.update(this.songname, this.artistname, this.editid)
      }
    });
  }
  // updatetrack(item){
  // this.showform=true;

  // }

  update(songname, artist, id) {
    console.log(songname, artist, id)
    this.trackservice.updatetrack(songname, artist, id).subscribe((data) => {
      console.log('updated');

    })
    console.log('updated');
    alert('track updated')
    window.location.reload();

  }
}

