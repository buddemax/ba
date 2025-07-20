import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;
  loading = true;
  notFound = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  getImageUrl(cover: string): string {
    const postId = cover.match(/post(\d+)\.jpg/)?.[1] || '1';
    // For the first post, use a specific image that looks like night sky
    if (postId === '1') {
      return 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=400&fit=crop&crop=center';
    }
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