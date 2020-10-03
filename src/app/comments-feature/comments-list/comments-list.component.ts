import { CommentService } from "../comment.service";
import { Component, OnInit } from "@angular/core";
import { comment } from "../comment";

@Component({
  selector: "app-comments-list",
  templateUrl: "./comments-list.component.html",
  styleUrls: ["./comments-list.component.scss"],
})
export class CommentsListComponent implements OnInit {
  constructor(private commentsService: CommentService) {}

  comments: comment[];
  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.commentsService
      .get()
      .subscribe((comments) => (this.comments = comments));
  }

  sort() {
    this.comments.reverse();
  }
}
