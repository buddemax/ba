import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogOverview from './BlogOverview';
import BlogDetail from './BlogDetail';
import PerformanceMonitor from './PerformanceMonitor';

function App() {
  return (
    <Router>
      <PerformanceMonitor />
      <Routes>
        <Route path="/" element={<BlogOverview />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
