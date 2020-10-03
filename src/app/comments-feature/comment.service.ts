import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { comment } from "./comment";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  constructor(private commentSrvice: HttpClient) {}

  get() {
    return this.commentSrvice.get<comment[]>(environment.api.comments());
  }
  getPostComments(id: number) {
    return this.commentSrvice.get<comment[]>(
      environment.api.posts() + id + "/comments"
    );
  }
}
