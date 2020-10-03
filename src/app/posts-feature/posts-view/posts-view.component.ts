import { PostService } from "./../post.service";
import { Component, OnInit } from "@angular/core";
import { post } from "../post.type";

@Component({
  selector: "app-posts-view",
  templateUrl: "./posts-view.component.html",
  styleUrls: ["./posts-view.component.scss"],
})
export class PostsViewComponent implements OnInit {
  posts: post[];

  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.postsService.get().subscribe((posts) => (this.posts = posts));
  }
  postReverse() {
    this.posts.reverse();
  }
}
