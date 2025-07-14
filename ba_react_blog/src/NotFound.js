import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
    <h1>404 – Nicht gefunden</h1>
    <p>Der angeforderte Artikel existiert nicht oder wurde entfernt.</p>
    <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>Zurück zur Startseite</Link>
  </div>
);

export default NotFound; 