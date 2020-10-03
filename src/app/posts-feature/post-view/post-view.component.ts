import { CommentService } from "./../../comments-feature/comment.service";
import { post } from "./../post.type";
import { UserService } from "./../user.service";
import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "../user";
import { comment } from "src/app/comments-feature/comment";

@Component({
  selector: "app-post-view",
  templateUrl: "./post-view.component.html",
  styleUrls: ["./post-view.component.scss"],
})
export class PostViewComponent implements OnInit {
  post: post;
  user: User;
  comments: comment[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private commentsService: CommentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getPost(param.id);
      this.getPostComment(param.id);
    });
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe((response) => {
      this.post = response;
      this.getUser(response.userId);
    });
  }

  getUser(id: number) {
    this.userService.get(id).subscribe((user) => (this.user = user));
  }

  getPostComment(id) {
    this.commentsService.getPostComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
