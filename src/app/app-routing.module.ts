import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DiscountedProductsComponent } from './components/discounted-products/discounted-products.component';
import { NormalProductsComponent } from './components/normal-products/normal-products.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Products', component: ProductsComponent, children: [
      { path: 'discounted', component:DiscountedProductsComponent  },
      { path: 'Normal', component: NormalProductsComponent },
    ],
  },
  { path: 'Users', component: UsersComponent },
  { path: 'Posts', component: PostsComponent },
  { path: 'Posts/:id/Comments', component: CommentsComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
