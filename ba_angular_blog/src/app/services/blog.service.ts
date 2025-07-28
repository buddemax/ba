import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface Comment {
  id: number;
  author: string;
  text: string;
}

export interface BlogPost {
  id: number;
  title: string;
  cover: string;
  content: string;
  comments: Comment[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient);

  private posts: BlogPost[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  getPosts(): Observable<BlogPost[]> {
    if (this.posts.length > 0) {
      console.log('Returning cached posts:', this.posts.length);
      return of(this.posts);
    }
    
    console.log('Loading posts from /assets/posts.json');
    
    return this.http.get<BlogPost[]>('/assets/posts.json').pipe(
      tap(posts => {
        console.log('Successfully loaded posts:', posts?.length || 0);
        if (posts && posts.length > 0) {
          console.log('First post:', posts[0].title);
        }
      }),
      map(posts => {
        this.posts = posts || [];
        return this.posts;
      }),
      catchError(error => {
        console.error('Error loading posts from /assets/posts.json:', error);
        console.error('Error details:', {
          status: error.status,
          statusText: error.statusText,
          url: error.url,
          message: error.message
        });
        return of([]);
      })
    );
  }

  getPostById(id: number): Observable<BlogPost | null> {
    return this.getPosts().pipe(
      map(posts => {
        const post = posts.find(post => post.id === id);
        console.log(`Looking for post ${id}, found:`, post ? post.title : 'not found');
        return post || null;
      })
    );
  }
} 