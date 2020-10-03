import { Component, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { comment } from "../comment";

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.scss"],
})
export class CommentCardComponent {
  @Input()
  comment: comment;
  constructor(private router: Router) {}
  @HostListener("click")
  goToPost() {
    // this.router.navigate(["details", 11]);
    this.router.navigate([
      {
        outlets: {
          primary: ["details", this.comment.postId],
          commentsList: null,
        },
      },
    ]);
  }
}
