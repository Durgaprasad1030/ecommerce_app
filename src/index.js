import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use SSR hydration if initial server data exists
const rootElement = document.getElementById('root');
const initialData = window.__INITIAL_DATA__ || [];

// If the app was rendered on the server, hydrate instead of re-rendering
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App products={initialData} />);
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App products={initialData} />
    </React.StrictMode>
  );
}

// Optional performance measurement
reportWebVitals();
