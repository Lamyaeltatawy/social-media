import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from '../model/posts';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }
  GetAllPosts() {
  return  this.http.get(`${environment.baseApi}/posts`)
  }
  GetPostComment(postId:number){
    return this.http.get(`${environment.baseApi}/posts/${postId}/comments`)
  }
}
