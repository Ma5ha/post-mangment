import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { post } from "../../post.type";

@Component({
  selector: "app-post-row",
  templateUrl: "./post-row.component.html",
  styleUrls: ["./post-row.component.scss"],
})
export class PostRowComponent implements OnInit {
  @Input()
  post: post;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener("click")
  redirectTo() {
    this.router.navigate(["post", this.post.id]);
  }
}
