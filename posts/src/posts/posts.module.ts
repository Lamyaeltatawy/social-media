import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    AllPostsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
],
  exports:[
    AllPostsComponent
  ]
})
export class PostsModule { }
