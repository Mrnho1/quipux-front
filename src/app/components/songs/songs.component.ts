import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any[] = [];
  newSong: any = {};

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

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(
      () => {
        console.log(`Song with ID ${id} deleted successfully.`);
        // Atualizar a lista de músicas após a exclusão
        this.loadSongs();
      },
      (error: any) => {
        console.error(`Error deleting song with ID ${id}:`, error);
      }
    );
  }

  addSong() {
    this.songService.postSong(this.newSong).subscribe(
      (data: any) => {
        console.log('Song added successfully:', data);
        this.loadSongs();
        this.newSong = {}; // Limpar o formulário após adicionar a música
      },
      (error: any) => {
        console.error('Error adding song:', error);
      }
    );
  }
}
