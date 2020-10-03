import { CommentService } from "./../comment.service";
import { Component, OnInit } from "@angular/core";
import { comment } from "../comment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-comments",
  templateUrl: "./post-comments.component.html",
  styleUrls: ["./post-comments.component.scss"],
})
export class PostCommentsComponent implements OnInit {
  comments: comment[];
  constructor(
    private commentService: CommentService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.getComments(param.id);
    });
  }

  getComments(id: number) {
    this.commentService
      .getPostComments(id)
      .subscribe((res) => (this.comments = res));
  }
}
