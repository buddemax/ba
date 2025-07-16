<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import postsData from '../assets/posts.json'

const route = useRoute()
const posts = ref([])
const post = ref(null)
const notFound = ref(false)

onMounted(() => {
  posts.value = postsData
  const postId = parseInt(route.params.id)
  post.value = posts.value.find(p => p.id === postId)
  
  if (!post.value) {
    notFound.value = true
  }
})

const formatContent = (content) => {
  return content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) {
        return `<h2>${line.substring(3)}</h2>`
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return `<strong>${line.substring(2, line.length - 2)}</strong>`
      }
      return line ? `<p>${line}</p>` : ''
    })
    .join('')
}
</script>

<template>
  <div class="blog-detail">
    <!-- 404 Not Found -->
    <div v-if="notFound" class="not-found">
      <div class="container">
        <h1>404 - Artikel nicht gefunden</h1>
        <p>Der gesuchte Artikel konnte nicht gefunden werden.</p>
        <RouterLink to="/" class="back-btn">
          Zurück zur Startseite
        </RouterLink>
      </div>
    </div>

    <!-- Blog Post Detail -->
    <div v-else-if="post" class="post-detail">
      <div class="container">
        <!-- Back Link -->
        <RouterLink to="/" class="back-link">
          ← Zurück zur Startseite
        </RouterLink>

        <!-- Post Header -->
        <header class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
        </header>

        <!-- Post Image -->
        <div class="post-image">
          <img 
            :src="`https://picsum.photos/800/400?random=${post.id}`" 
            :alt="post.title"
            class="post-img"
          />
        </div>

        <!-- Post Content -->
        <article class="post-content">
          <div v-html="formatContent(post.content)" class="content-text"></div>
        </article>

        <!-- Comments Section -->
        <section class="comments-section">
          <h2 class="comments-title">Kommentare</h2>
          
          <div v-if="post.comments && post.comments.length > 0" class="comments-list">
            <div 
              v-for="comment in post.comments" 
              :key="comment.id" 
              class="comment"
            >
              <div class="comment-header">
                <span class="comment-author">{{ comment.author }}</span>
              </div>
              <div class="comment-text">{{ comment.text }}</div>
            </div>
          </div>
          
          <div v-else class="no-comments">
            <p>Noch keine Kommentare vorhanden.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overall Layout */
.blog-detail {
  min-height: 100vh;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Back Link */
.back-link {
  display: inline-block;
  color: #0066cc;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 40px;
  margin-top: 20px;
}

.back-link:hover {
  text-decoration: underline;
}

/* Post Header */
.post-header {
  margin-bottom: 40px;
}

.post-title {
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin: 0;
  text-align: center;
  line-height: 1.2;
}

/* Post Image */
.post-image {
  margin-bottom: 40px;
}

.post-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
  box-shadow: none;
}

/* Post Content */
.post-content {
  margin-bottom: 60px;
}

.content-text {
  font-size: 16px;
  line-height: 1.6;
  color: black;
}

.content-text h2 {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin: 48px 0 24px 0;
  line-height: 1.3;
}

.content-text p {
  margin: 0 0 16px 0;
  text-align: left;
}

.content-text strong {
  font-weight: bold;
}

/* Comments Section */
.comments-section {
  border-top: 1px solid black;
  padding-top: 48px;
  margin-top: 48px;
}

.comments-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin: 0 0 24px 0;
}

.comments-list {
  margin-bottom: 20px;
}

.comment {
  margin-bottom: 12px;
}

.comment-header {
  margin-bottom: 4px;
}

.comment-author {
  font-weight: bold;
  font-size: 16px;
  color: black;
}

.comment-text {
  font-size: 16px;
  color: black;
  line-height: 1.5;
}

.no-comments p {
  font-size: 16px;
  color: black;
  margin: 0;
}

/* 404 Page */
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.not-found h1 {
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 16px;
}

.not-found p {
  font-size: 16px;
  color: black;
  margin-bottom: 24px;
}

.back-btn {
  display: inline-block;
  color: #0066cc;
  text-decoration: none;
  font-size: 16px;
}

.back-btn:hover {
  text-decoration: underline;
}
</style> 