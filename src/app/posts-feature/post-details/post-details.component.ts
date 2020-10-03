import { Component, Input, OnInit } from "@angular/core";

import { post } from "../post.type";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  edit = false;
  @Input()
  post: post;
  constructor() {}

  ngOnInit(): void {}
}
