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
  playlistForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playlistService: PlaylistServiceService
  ) {
    this.playlistForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    this.playlistService.getAllPlaylists().subscribe(
      (data: any[]) => {
        this.playlists = data;
      },
      (error: any) => {
        console.error('Error fetching playlists', error);
      }
    );
  }

  onSubmit(): void {
    if (this.playlistForm.valid) {
      const playlistData = {
        name: this.playlistForm.value.name,
        description: this.playlistForm.value.description
      };

      this.playlistService.createPlaylist(playlistData).subscribe(
        () => {
          console.log('Playlist created successfully');
          this.loadPlaylists();
          this.playlistForm.reset();
        },
        (error: any) => {
          console.error('Error creating playlist', error);
        }
      );
    }
  }

  onDelete(name: string): void {
    if (confirm(`Gostaria mesmo de deletar a playlist '${name}'?`)) {
      this.playlistService.deletePlaylistByName(name).subscribe(
        () => {
          console.log('Playlist deletada com sucesso');
          this.loadPlaylists();
        },
        (error: any) => {
          console.error('Error deleting playlist', error);
        }
      );
    }
  }
}
