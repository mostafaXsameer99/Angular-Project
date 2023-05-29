import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from '../Shared/IComment';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  id: any;
  private Url!: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
    });
    this.Url = `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`;
  }

  GetAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }));
  }
}
