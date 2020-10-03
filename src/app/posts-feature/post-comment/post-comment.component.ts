import { comment } from "./../../comments-feature/comment";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"],
})
export class PostCommentComponent implements OnInit {
  @Input()
  comment: comment;
  constructor() {}

  ngOnInit(): void {}
}
