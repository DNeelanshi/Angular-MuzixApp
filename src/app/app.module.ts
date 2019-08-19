import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import {FormsModule} from '@angular/forms';
// import { SearchTrackComponent } from './pages/search-track/search-track.component';
import { HeaderComponent } from './pages/header/header.component';
// import { PlaylistComponent } from './pages/playlist/playlist.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
 import {HttpClientModule} from '@angular/common/http';
import {TrackService} from './providers/track.service';
import { BodyComponent } from './pages/body/body.component';
// import { SearchTrackListComponent } from './pages/search-track-list/search-track-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap';
import { FooterComponent } from './pages/footer/footer.component';
import {routingComponents} from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatedialogComponent } from './pages/updatedialog/updatedialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
// import { ToptracksComponent } from './pages/toptracks/toptracks.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    BodyComponent,
    UpdatedialogComponent,
    FooterComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    CarouselModule,
     MatToolbarModule,
     MatGridListModule,
     FlexLayoutModule,
     HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    NgxUsefulSwiperModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NgMatSearchBarModule,
    MatFormFieldModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent],
  entryComponents: [UpdatedialogComponent],
})
export class AppModule { }
