import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IPost } from 'src/app/Shared/IPost';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsList: IPost[] | undefined;
  errMessage: any;

  constructor(private postsService: PostsService, private router: Router) {

  }

  ngOnInit(): void {
    this.postsService.GetAllPosts().subscribe({
      next: data => this.postsList = data,
      error: err => this.errMessage = err
    });
  }
  goToCommentSection(id: any) {
    this.router.navigate(['/Posts', id, 'Comments']);
  }

}
