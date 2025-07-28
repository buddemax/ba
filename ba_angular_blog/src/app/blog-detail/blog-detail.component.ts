import { Component, OnInit, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  private blogService = inject(BlogService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  post: BlogPost | null = null;
  loading = true;
  notFound = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadPost(id);
    });
  }

  loadPost(id: number): void {
    this.loading = true;
    this.notFound = false;

    this.blogService.getPostById(id).subscribe({
      next: (post) => {
        if (post) {
          this.post = post;
        } else {
          this.notFound = true;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading post:', error);
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  getImageUrl(postId: number): string {
    return `https://picsum.photos/seed/${postId}b/800/400`;
  }

  formatContent(content: string): string {
    // Convert markdown headers to HTML
    return content
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
} 