import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Ensure the root element exists in your HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement); // Create a root for React 18
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
