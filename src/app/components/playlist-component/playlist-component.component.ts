import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaylistServiceService } from 'src/app/services/playlist-service.service';


@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist-component.component.html',
  styleUrls: ['./playlist-component.component.css']
})
export class PlaylistComponentComponent implements OnInit {
  playlists: any[] = [];
  playlistForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private playlistService: PlaylistServiceService
  ) { }

  ngOnInit(): void {
    this.loadPlaylists();

    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

  }

  onSubmit(): void {
    if (this.playlistForm.valid) {
      const playlistData = {
        name: this.playlistForm.value.name,
        description: this.playlistForm.value.description
      };

      this.playlistService.createPlaylist(playlistData).subscribe(
        (response) => {
          console.log('Playlist created successfully', response);
          this.loadPlaylists();
          this.playlistForm.reset();
        },
        (error) => {
          console.error('Error creating playlist', error);
        }
      );
    }
  }

  private loadPlaylists(): void {
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
