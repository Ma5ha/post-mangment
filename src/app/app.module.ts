import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { NavigationComponent } from "./navigation/navigation.component";

import { PostsModule } from "./posts-feature/posts.module";
import { CommentsModule } from "./comments-feature/comments.module";
import { SidebarToggleComponent } from "./sidebar-toggle/sidebar-toggle.component";
import {
  NgbDropdown,
  NgbDropdownModule,
  NgbModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    SidebarToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    CommentsModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
