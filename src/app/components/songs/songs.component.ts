import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any[] = [];
  newSong: any = {};
  @ViewChild('songForm') songForm!: NgForm;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getAllSongs().subscribe(
      (data: any[]) => {
        this.songs = data;
      },
      (error) => {
        console.error('Erro ao carregar músicas:', error);
      }
    );
  }

  onSubmit(): void {
    this.songService.createSong(this.newSong).subscribe(
      (data) => {
        console.log('Música adicionada com sucesso:', data);
        this.newSong = {};
        this.loadSongs();
        this.songForm.resetForm();
      },
      (error) => {
        console.error('Erro ao adicionar música:', error);
      }
    );
  }

  onDelete(id: string) {
    this.songService.deleteSong(id).subscribe(
      () => {
        console.log('Música excluída com sucesso');
        this.loadSongs();
      },
      (error) => {
        console.error('Erro ao excluir música:', error);
      }
    );
  }
}
