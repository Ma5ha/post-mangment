import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private service: HttpClient) {}
  get(id: number) {
    return this.service.get<User>(environment.api.users() + id);
  }
}
