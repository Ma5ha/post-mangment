import { CommentsListComponent } from "./comments-feature/comments-list/comments-list.component";
import { PostViewComponent } from "./posts-feature/post-view/post-view.component";
import { PostsViewComponent } from "./posts-feature/posts-view/posts-view.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",

    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: PostsViewComponent,
      },
      { path: "post/:id", component: PostViewComponent },
    ],
  },
  {
    path: "comments",
    component: CommentsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
