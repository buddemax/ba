import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from './blogData.json';
import NotFound from './NotFound';

function renderMarkdown(md) {
  // Very basic markdown renderer: headings and paragraphs
  return md.split(/\n{2,}/).map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('**') && block.endsWith('**')) {
      return <strong key={i}>{block.replace(/\*\*/g, '')}</strong>;
    }
    return <p key={i}>{block}</p>;
  });
}

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find(p => String(p.id) === id);

  if (!post) return <NotFound />;

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/" style={{ color: 'blue', textDecoration: 'none', marginBottom: '20px', display: 'block' }}>← Zurück zur Startseite</Link>
        <h1 style={{ marginBottom: '20px' }}>{post.title}</h1>
        <img src={`https://picsum.photos/seed/${post.id}b/800/400`} alt={post.title} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px' }} />
        <div style={{ marginBottom: '30px' }}>
          {renderMarkdown(post.content)}
        </div>
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <h3>Kommentare</h3>
          {post.comments && post.comments.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {post.comments.map(c => (
                <li key={c.id} style={{ marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>{c.author}:</span> {c.text}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontStyle: 'italic', color: '#666' }}>Noch keine Kommentare vorhanden.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 