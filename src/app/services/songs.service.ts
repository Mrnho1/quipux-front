import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/songs';

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  createSong(songData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, songData);
  }

  deleteSong(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

