const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Erweiterte Metriken für Framework-Vergleich
      const metrics = {};
      
      getCLS((metric) => {
        metrics.CLS = metric.value;
        console.log('CLS (Cumulative Layout Shift):', metric.value);
        onPerfEntry(metric);
      });
      
      getFID((metric) => {
        metrics.FID = metric.value;
        console.log('FID (First Input Delay):', metric.value, 'ms');
        onPerfEntry(metric);
      });
      
      getFCP((metric) => {
        metrics.FCP = metric.value;
        console.log('FCP (First Contentful Paint):', metric.value, 'ms');
        onPerfEntry(metric);
      });
      
      getLCP((metric) => {
        metrics.LCP = metric.value;
        console.log('LCP (Largest Contentful Paint):', metric.value, 'ms');
        onPerfEntry(metric);
      });
      
      getTTFB((metric) => {
        metrics.TTFB = metric.value;
        console.log('TTFB (Time to First Byte):', metric.value, 'ms');
        onPerfEntry(metric);
      });
      
      // Speed Index und TBT müssen manuell berechnet werden
      // Diese können über Performance API oder Lighthouse API ermittelt werden
      setTimeout(() => {
        console.log('=== Framework Performance Vergleich ===');
        console.log('React App Performance Metriken:');
        console.table(metrics);
        console.log('Für vollständigen Vergleich benötigen Sie:');
        console.log('- Speed Index (SI)');
        console.log('- Total Blocking Time (TBT)');
        console.log('Diese können über Lighthouse API oder Performance API ermittelt werden.');
      }, 2000);
    });
  }
};

export default reportWebVitals;
