import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// Change unregister() to register() below:
serviceWorker.register();
