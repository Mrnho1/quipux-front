import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/songs.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getAllSongs().subscribe(
      (data: any[]) => {
        this.songs = data;
      },
      (error: any) => {
        console.error('Error fetching songs:', error);
      }
    );
  }
}
