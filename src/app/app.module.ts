import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponentComponent } from './components/playlist-component/playlist-component.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongsComponent } from './components/songs/songs.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponentComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
