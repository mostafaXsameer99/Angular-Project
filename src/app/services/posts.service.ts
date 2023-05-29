import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../Shared/IPost';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private Url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  GetAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }));
  }
}
