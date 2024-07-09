import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {

  private apiUrl = 'http://localhost:8080/playlists';

  constructor(private http: HttpClient) { }

  getAllPlaylists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  createPlaylist(playlistData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, playlistData);
  }
}
