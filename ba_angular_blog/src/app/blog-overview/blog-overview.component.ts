import { Component, OnInit, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.css'
})

export class BlogOverviewComponent implements OnInit {
  private blogService = inject(BlogService);

  posts: BlogPost[] = [];
  loading = true;
  error = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    console.log('BlogOverviewComponent initialized');
    this.loadPosts();
  }

  loadPosts(): void {
    console.log('Starting to load posts...');
    this.loading = true;
    this.error = false;

    this.blogService.getPosts().subscribe({
      next: (posts) => {
        console.log('Posts loaded successfully:', posts.length);
        this.posts = posts;
        this.loading = false;
        this.error = false;
      },
      error: (error) => {
        console.error('Error in component when loading posts:', error);
        this.loading = false;
        this.error = true;
      }
    });
  }

  getPreviewText(content: string): string {
    // Remove markdown headers and get first paragraph
    const text = content.replace(/^## .*$/gm, '').trim();
    const firstParagraph = text.split('\n\n')[0];
    return firstParagraph.length > 200 ? firstParagraph.substring(0, 200) + '...' : firstParagraph;
  }

  getImageUrl(postId: number): string {
    return `https://picsum.photos/seed/${postId}a/400/200`;
  }

  getHeroImageUrl(): string {
    return 'https://picsum.photos/1200/400?grayscale&blur=1';
  }
} 