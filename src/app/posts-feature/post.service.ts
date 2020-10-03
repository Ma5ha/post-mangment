import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { post } from "./post.type";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private postsService: HttpClient) {}
  get() {
    return this.postsService.get<post[]>(environment.api.posts());
  }
  getPost(id: number) {
    return this.postsService.get<post>(environment.api.posts() + `/${id}`);
  }
}
