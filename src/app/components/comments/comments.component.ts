import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IComment } from 'src/app/Shared/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  id: any;
  commentList: IComment[] = [];
  errMessage: any;
  Url!: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
    });

    this.Url = `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`;

    this.GetAllComments().subscribe({
      next: data => this.commentList = data,
      error: err => this.errMessage = err
    });
    
  }

  GetAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError");
    }));
  }

  goToNextPost() {
    let nextId = parseInt(this.id) + 1;
    if (nextId <= 100) {
      this.router.navigate(['/Posts', nextId, 'Comments']);
    }
  }

  goToPreviousPost() {
    let prevId = parseInt(this.id) - 1;
    if (prevId >= 1) {
      this.router.navigate(['/Posts', prevId, 'Comments']);
    }
  }
}

