import { Component, OnInit } from '@angular/core';
import { PlaylistServiceService } from 'src/app/services/playlist-service.service';

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist-component.component.html',
  styleUrls: ['./playlist-component.component.css']
})
export class PlaylistComponentComponent implements OnInit {
  playlists: any[] = [];

  constructor(private playlistService: PlaylistServiceService) {}

  ngOnInit(): void {
    this.playlistService.getAllPlaylists().subscribe(
      (data: any[]) => {
        this.playlists = data;
      },
      (error: any) => {
        console.error('Error fetching playlists', error);
      }
    );
  }
}
