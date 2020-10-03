import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar-toggle",
  templateUrl: "./sidebar-toggle.component.html",
  styleUrls: ["./sidebar-toggle.component.scss"],
})
export class SidebarToggleComponent {
  commentListState = false;
  constructor(private router: Router) {}

  commentsListToggle() {
    if (this.commentListState) {
      this.router.navigate([{ outlets: { commentsList: null } }]);
      this.commentListState = false;
      return;
    }
    this.router.navigate([{ outlets: { commentsList: "comments" } }]);
    this.commentListState = true;
  }
}
