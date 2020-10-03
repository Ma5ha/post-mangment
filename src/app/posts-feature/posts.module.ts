import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { CommentsModule } from "./../comments-feature/comments.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsViewComponent } from "./posts-view/posts-view.component";
import { HttpClientModule } from "@angular/common/http";
import { PostRowComponent } from "./posts-view/post-row/post-row.component";
import { PostViewComponent } from "./post-view/post-view.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { PostCommentComponent } from "./post-comment/post-comment.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    PostsViewComponent,
    PostRowComponent,
    PostViewComponent,
    PostDetailsComponent,
    UserInfoComponent,
    PostCommentComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentsModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],
  exports: [PostsViewComponent, PostViewComponent],
})
export class PostsModule {}
