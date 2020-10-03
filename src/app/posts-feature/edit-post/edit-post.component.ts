import { post } from "./../post.type";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"],
})
export class EditPostComponent implements OnInit {
  @Input()
  post: post;

  postEdit: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form();
  }

  form() {
    this.postEdit = new FormGroup({
      title: new FormControl(this.post.title),
      body: new FormControl(this.post.body),
    });
  }
}
