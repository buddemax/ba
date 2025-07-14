import React, { useState, useEffect } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dynamisch web-vitals importieren
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => setMetrics(prev => ({ ...prev, CLS: metric.value })));
      getFID(metric => setMetrics(prev => ({ ...prev, FID: metric.value })));
      getFCP(metric => setMetrics(prev => ({ ...prev, FCP: metric.value })));
      getLCP(metric => setMetrics(prev => ({ ...prev, LCP: metric.value })));
      getTTFB(metric => setMetrics(prev => ({ ...prev, TTFB: metric.value })));
    });
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      <button 
        onClick={toggleVisibility}
        style={{
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>
      
      {isVisible && (
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '15px',
          marginTop: '10px',
          minWidth: '300px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
            Framework Performance Vergleich
          </h3>
          
          <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
            <div style={{ marginBottom: '8px' }}>
              <strong>FCP:</strong> {metrics.FCP !== undefined ? metrics.FCP.toFixed(2) + ' ms' : 'Loading...'}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong>LCP:</strong> {metrics.LCP !== undefined ? metrics.LCP.toFixed(2) + ' ms' : 'Loading...'}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong>FID:</strong> {metrics.FID !== undefined ? metrics.FID.toFixed(2) + ' ms' : 'Loading...'}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong>CLS:</strong> {metrics.CLS !== undefined ? metrics.CLS.toFixed(4) : 'Loading...'}
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong>TTFB:</strong> {metrics.TTFB !== undefined ? metrics.TTFB.toFixed(2) + ' ms' : 'Loading...'}
            </div>
          </div>
          
          <div style={{ 
            marginTop: '10px', 
            padding: '8px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '3px',
            fontSize: '11px',
            color: '#666'
          }}>
            <strong>Hinweis:</strong> Für vollständigen Framework-Vergleich benötigen Sie Lighthouse API für Speed Index und TBT.
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor; 