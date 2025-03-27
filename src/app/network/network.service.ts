import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  apiUrl = 'assets/db.json';

  constructor(private http: HttpClient) {}

  // Get all posts
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

    // Fetch single user by ID
  getUserById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
