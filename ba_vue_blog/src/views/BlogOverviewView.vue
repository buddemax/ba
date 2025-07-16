<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import postsData from '../assets/posts.json'

const posts = ref([])

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
          src="https://picsum.photos/1200/400?random=1&grayscale" 
          alt="Blog Hero" 
          class="hero-img"
        />
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-posts">
      <div class="container">
        
        <div class="posts-grid">
          <article 
            v-for="post in posts" 
            :key="post.id" 
            class="post-card"
          >
            <div class="post-image">
              <img 
                :src="`https://picsum.photos/400/250?random=${post.id}`" 
                :alt="post.title"
                class="post-img"
              />
            </div>
            
            <div class="post-content">
              <h2 class="post-title">{{ post.title }}</h2>
              <p class="post-excerpt">
                {{ post.content.substring(0, 120) }}...
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
  height: 300px;
  overflow: hidden;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

/* Blog Posts Section */
.blog-posts {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 50px;
  font-family: 'Arial', sans-serif;
}

/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

/* Post Cards */
.post-card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding: 24px;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
  font-family: 'Arial', sans-serif;
}

.post-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
  font-family: 'Arial', sans-serif;
}

.read-more-btn {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  font-family: 'Arial', sans-serif;
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
