import { Component, Input, OnInit } from '@angular/core';
import { comments, posts } from 'src/posts/model/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() data:posts[]=[];
@Input() comments:comments[]=[]
  constructor() { }
  
  ngOnInit(): void {
    
  }
  loadComments(postId:string){

  }
}
