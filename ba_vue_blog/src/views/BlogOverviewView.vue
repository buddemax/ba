<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import postsData from '../assets/posts.json'

const posts = ref([])

// Function to get preview text (same as React implementation)
function getPreview(content) {
  // Get first 180 chars or until first section break
  const plain = content.replace(/[#*\n]/g, ' ').replace(/\s+/g, ' ');
  return plain.slice(0, 180) + (plain.length > 180 ? '...' : '');
}

onMounted(() => {
  posts.value = postsData // Show all posts from the JSON file
})
</script>

<template>
  <div class="blog-overview">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-image">
        <img 
          src="https://picsum.photos/1200/400?grayscale&blur=1" 
          alt="Blog Hero" 
          class="hero-img"
        />
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-posts">
      <div class="container">
        <h1 class="section-title">Blog Beiträge</h1>
        
        <div class="posts-grid">
          <article 
            v-for="post in posts" 
            :key="post.id" 
            class="post-card"
          >
            <div class="post-image">
              <img 
                :src="`https://picsum.photos/seed/${post.id}a/400/200`" 
                :alt="post.title"
                class="post-img"
              />
            </div>
            
            <div class="post-content">
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-excerpt">
                {{ getPreview(post.content) }}
              </p>
              <RouterLink 
                :to="`/blog/${post.id}`" 
                class="read-more-btn"
              >
                Weiterlesen →
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-overview {
  min-height: 100vh;
  background-color: #f8f9fa;
}

/* Hero Section */
.hero {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
}

.hero-image {
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Blog Posts Section */
.blog-posts {
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  font-family: system-ui, sans-serif;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Post Cards */
.post-card {
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 15px;
}

.post-image {
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 10px;
}

.post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding: 0;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 10px 0;
  line-height: 1.4;
  font-family: system-ui, sans-serif;
}

.post-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  font-family: system-ui, sans-serif;
}

.read-more-btn {
  color: blue;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  font-family: system-ui, sans-serif;
}

.read-more-btn:hover {
  color: #0056b3;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 30px;
  }
  
  .blog-posts {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .post-content {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 200px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .post-title {
    font-size: 1.1rem;
  }
}
</style>
