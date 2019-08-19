import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Track } from 'src/app/track';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {
 
  constructor( public dialogRef: MatDialogRef<UpdatedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Track) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
