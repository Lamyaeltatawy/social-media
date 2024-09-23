export interface response {
  posts: posts[];
  total: number;
  skip: number;
  limit: number;
}
export interface posts {
  id: string;
  title: string;
  body: string;
  tags: string;
  reactions: reactions;
  views: number;
  userId: number;
}
export interface reactions {
  likes: number;
  dislikes: number;
}
export interface commentRes{
  comments:comments[],
  limit:number,
  skip:number,
  total:number,
}
export interface comments{
  body
: 
"These are fabulous ideas!"
id:number,
likes:number,
postId:number
}
