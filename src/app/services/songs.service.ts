import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private baseUrl = 'http://localhost:8080/songs';

  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  postSong(song: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, song);
  }
  
  deleteSong(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}