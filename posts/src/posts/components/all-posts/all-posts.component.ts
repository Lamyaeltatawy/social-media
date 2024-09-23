import { Component, OnInit } from '@angular/core';
import { commentRes, comments, posts } from 'src/posts/model/posts';
import { PostserviceService } from 'src/posts/services/postservice.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  comments?: comments[]=[];

  constructor(private service:PostserviceService) { }
  data?:posts[]=[]
  ngOnInit(): void {
this.getPosts()
  }
getPosts(){
this.service.GetAllPosts().subscribe((res:any)=>{
  this.data=res.posts
  console.log(this.data);
  this.GetComments(1)
})
}
GetComments(postId:number){
  this.service.GetPostComment(postId).subscribe((res:any)=>{
    console.log(res.comments);
    this.comments=res.comments
  })
}
}
