import { CommentService } from "./../../comments-feature/comment.service";
import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";
import { post } from "../post.type";
import { comment } from "src/app/comments-feature/comment";

@Component({
  selector: "app-posts-view",
  templateUrl: "./posts-view.component.html",
  styleUrls: ["./posts-view.component.scss"],
})
export class PostsViewComponent implements OnInit {
  page = 1;
  posts: post[];
  displayedPosts: post[];
  pageSize = 5;
  collectionSize;
  comments: comment[];
  constructor(
    private postsService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.getComments();
  }

  getPosts(): void {
    this.postsService.get().subscribe((posts) => {
      this.posts = posts;
      this.refreshPosts();
      this.collectionSize = posts.length;
    });
  }
  postReverse() {
    this.posts.reverse();
    this.refreshPosts();
  }

  getComments() {
    this.commentService
      .get()
      .subscribe(
        (comments) => (this.comments = comments.reverse().slice(0, 4))
      );
  }

  refreshPosts() {
    this.displayedPosts = this.posts
      .map((post, i) => ({ id: i + 1, ...post }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
