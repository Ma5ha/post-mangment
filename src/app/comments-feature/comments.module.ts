import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentsListComponent } from "./comments-list/comments-list.component";
import { CommentCardComponent } from "./comment-card/comment-card.component";
import { PostCommentsComponent } from "./post-comments/post-comments.component";

@NgModule({
  declarations: [
    CommentsListComponent,
    CommentCardComponent,
    PostCommentsComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [CommentsListComponent, PostCommentsComponent],
})
export class CommentsModule {}
