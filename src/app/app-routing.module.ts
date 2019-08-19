import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTrackComponent } from './pages/search-track/search-track.component';
import { SearchTrackListComponent } from './pages/search-track-list/search-track-list.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ToptracksComponent } from './pages/toptracks/toptracks.component';


const routes: Routes = [
  {
    path:'home',component:ToptracksComponent 
  },
  {
    path:'playlist',component:PlaylistComponent 
  },
  {
    path:'searchbar', component: SearchTrackComponent
  },
  {
    path:'searchlist/:name', component : SearchTrackListComponent
  },
  {
    path:'',redirectTo :'home',pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  SearchTrackComponent,
  SearchTrackListComponent,
  PlaylistComponent,
  ToptracksComponent
]