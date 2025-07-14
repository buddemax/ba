import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './blogData.json';

const heroUrl = 'https://picsum.photos/1200/400?grayscale&blur=1';

function getPreview(content) {
  // Get first 180 chars or until first section break
  const plain = content.replace(/[#*\n]/g, ' ').replace(/\s+/g, ' ');
  return plain.slice(0, 180) + (plain.length > 180 ? '...' : '');
}

const BlogOverview = () => (
  <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
    <img src={heroUrl} alt="Hero" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '20px' }} />
    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Blog Beiträge</h1>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {blogData.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <img src={`https://picsum.photos/seed/${post.id}a/400/200`} alt={post.title} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
          <h2 style={{ margin: '0 0 10px 0' }}>{post.title}</h2>
          <p style={{ marginBottom: '15px' }}>{getPreview(post.content)}</p>
          <Link to={`/post/${post.id}`} style={{ color: 'blue', textDecoration: 'none' }}>Weiterlesen →</Link>
        </div>
      ))}
    </div>
  </div>
);

export default BlogOverview; 