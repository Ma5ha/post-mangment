import { post } from "./../post.type";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.scss"],
})
export class EditPostComponent implements OnInit {
  @Input()
  post: post;

  postEdit: FormGroup;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.postForm();
  }

  close() {
    this.activeModal.dismiss();
  }

  submitChanges() {
    this.activeModal.close(this.postEdit.value);
  }

  private postForm() {
    this.postEdit = new FormGroup({
      title: new FormControl(this.post.title),
      body: new FormControl(this.post.body),
    });
  }
}
