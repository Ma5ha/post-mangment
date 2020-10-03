import { EditPostComponent } from "./../edit-post/edit-post.component";
import { CommentService } from "./../../comments-feature/comment.service";
import { post } from "./../post.type";
import { UserService } from "./../user.service";
import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "../user";
import { comment } from "src/app/comments-feature/comment";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

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
    private commentsService: CommentService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.getPost(param.id);
      this.getPostComment(param.id);
    });
  }

  private getPost(id: number) {
    this.postService.getPost(id).subscribe((response) => {
      this.post = response;
      this.getUser(response.userId);
    });
  }

  private getUser(id: number) {
    this.userService.get(id).subscribe((user) => (this.user = user));
  }

  private getPostComment(id) {
    this.commentsService.getPostComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  editPost() {
    const modalRef = this.modalService.open(EditPostComponent);

    modalRef.componentInstance.post = this.post;
    modalRef.result.then((x) => {
      this.edit({ ...this.post, ...x });
    });
  }

  private edit(post: post) {
    this.postService.edit(post).subscribe((x) => (this.post = x));
  }
}
